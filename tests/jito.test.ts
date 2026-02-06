import { describe, it, expect, vi, beforeEach } from 'vitest'
import request from 'supertest'
import express, { Request, Response, NextFunction, Router } from 'express'
import { resetJitoProvider, _setBundleTimestamp, JITO_TIP_ACCOUNTS } from '../src/services/jito-provider.js'

vi.mock('@solana/web3.js', async () => {
  const actual = await vi.importActual('@solana/web3.js')
  return {
    ...actual as object,
    Connection: vi.fn().mockImplementation(() => ({
      getSlot: vi.fn().mockResolvedValue(300000000),
      rpcEndpoint: 'https://api.mainnet-beta.solana.com',
    })),
  }
})

const { default: app } = await import('../src/server.js')

// ─── Fixtures ───────────────────────────────────────────────────────────────

const validRelay = {
  transactions: ['SGVsbG8gV29ybGQ='],
}

const validRelayMultiple = {
  transactions: ['dHgx', 'dHgy', 'dHgz'],
  tipLamports: '25000',
}

// ─── POST /v1/jito/relay ────────────────────────────────────────────────────

describe('POST /v1/jito/relay', () => {
  beforeEach(() => {
    resetJitoProvider()
  })

  it('submits single transaction → 200 with jito_ prefix', async () => {
    const res = await request(app)
      .post('/v1/jito/relay')
      .send(validRelay)
    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.data.bundleId).toMatch(/^jito_[0-9a-f]{64}$/)
    expect(res.body.data.status).toBe('submitted')
    expect(res.body.data.tipLamports).toBe('10000')
    expect(res.body.data.gasSponsored).toBe(false)
    expect(JITO_TIP_ACCOUNTS).toContain(res.body.data.tipAccount)
    expect(typeof res.body.data.slot).toBe('number')
    expect(typeof res.body.data.signature).toBe('string')
    expect(res.body.data.estimatedConfirmation).toBeGreaterThan(Date.now() - 1000)
  })

  it('submits multiple transactions with custom tip → 200', async () => {
    const res = await request(app)
      .post('/v1/jito/relay')
      .send(validRelayMultiple)
    expect(res.status).toBe(200)
    expect(res.body.data.tipLamports).toBe('25000')
  })

  it('includes beta warning and headers', async () => {
    const res = await request(app)
      .post('/v1/jito/relay')
      .send(validRelay)
    expect(res.status).toBe(200)
    expect(res.body.beta).toBe(true)
    expect(res.body.warning).toContain('beta')
    expect(res.headers['x-beta']).toBe('true')
  })

  it('rejects empty transactions array → 400', async () => {
    const res = await request(app)
      .post('/v1/jito/relay')
      .send({ transactions: [] })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects more than 5 transactions → 400', async () => {
    const res = await request(app)
      .post('/v1/jito/relay')
      .send({ transactions: ['a', 'b', 'c', 'd', 'e', 'f'] })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('rejects tip below 1000 lamports → 400', async () => {
    const res = await request(app)
      .post('/v1/jito/relay')
      .send({ transactions: ['dHgx'], tipLamports: '500' })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('JITO_INVALID_TRANSACTION')
    expect(res.body.error.message).toContain('1000')
  })

  it('rejects missing transactions field → 400', async () => {
    const res = await request(app)
      .post('/v1/jito/relay')
      .send({ tipLamports: '10000' })
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('VALIDATION_ERROR')
  })

  it('allows gasSponsorship with enterprise tier (default in test) → 200', async () => {
    const res = await request(app)
      .post('/v1/jito/relay')
      .send({ transactions: ['dHgx'], gasSponsorship: true })
    expect(res.status).toBe(200)
    expect(res.body.data.gasSponsored).toBe(true)
  })
})

// ─── GET /v1/jito/bundle/:id ────────────────────────────────────────────────

describe('GET /v1/jito/bundle/:id', () => {
  beforeEach(() => {
    resetJitoProvider()
  })

  it('returns submitted status immediately after relay', async () => {
    const submitRes = await request(app)
      .post('/v1/jito/relay')
      .send(validRelay)
    const { bundleId } = submitRes.body.data

    const res = await request(app)
      .get(`/v1/jito/bundle/${bundleId}`)
    expect(res.status).toBe(200)
    expect(res.body.data.status).toBe('submitted')
    expect(res.body.data.progress).toBe(0)
    expect(res.body.data.confirmedAt).toBeUndefined()
  })

  it('returns confirmed with confirmedAt after timestamp override', async () => {
    const submitRes = await request(app)
      .post('/v1/jito/relay')
      .send(validRelay)
    const { bundleId } = submitRes.body.data

    _setBundleTimestamp(bundleId, Date.now() - 5000)

    const res = await request(app)
      .get(`/v1/jito/bundle/${bundleId}`)
    expect(res.status).toBe(200)
    expect(res.body.data.status).toBe('confirmed')
    expect(res.body.data.progress).toBe(100)
    expect(typeof res.body.data.confirmedAt).toBe('number')
    expect(typeof res.body.data.signature).toBe('string')
  })

  it('returns 404 for unknown bundle ID', async () => {
    const fakeId = 'jito_' + 'ff'.repeat(32)
    const res = await request(app)
      .get(`/v1/jito/bundle/${fakeId}`)
    expect(res.status).toBe(404)
    expect(res.body.success).toBe(false)
    expect(res.body.error.code).toBe('JITO_BUNDLE_NOT_FOUND')
  })

  it('returns 400 for invalid bundle ID format', async () => {
    const res = await request(app)
      .get('/v1/jito/bundle/invalid_id')
    expect(res.status).toBe(400)
    expect(res.body.error.code).toBe('JITO_INVALID_TRANSACTION')
  })

  it('includes progress percentage in response', async () => {
    const submitRes = await request(app)
      .post('/v1/jito/relay')
      .send(validRelay)
    const { bundleId } = submitRes.body.data

    const res = await request(app)
      .get(`/v1/jito/bundle/${bundleId}`)
    expect(typeof res.body.data.progress).toBe('number')
    expect(res.body.data.progress).toBeGreaterThanOrEqual(0)
    expect(res.body.data.progress).toBeLessThanOrEqual(100)
  })
})

// ─── Idempotency ────────────────────────────────────────────────────────────

describe('Jito relay idempotency', () => {
  beforeEach(() => {
    resetJitoProvider()
  })

  it('returns cached response with Idempotency-Replayed header', async () => {
    const key = '550e8400-e29b-41d4-a716-446655440077'
    const first = await request(app)
      .post('/v1/jito/relay')
      .set('Idempotency-Key', key)
      .send(validRelay)
    expect(first.status).toBe(200)

    const second = await request(app)
      .post('/v1/jito/relay')
      .set('Idempotency-Key', key)
      .send(validRelay)
    expect(second.status).toBe(200)
    expect(second.headers['idempotency-replayed']).toBe('true')
    expect(second.body.data.bundleId).toBe(first.body.data.bundleId)
  })

  it('different idempotency key → different response', async () => {
    const key1 = '550e8400-e29b-41d4-a716-446655440078'
    const key2 = '550e8400-e29b-41d4-a716-446655440079'

    const first = await request(app)
      .post('/v1/jito/relay')
      .set('Idempotency-Key', key1)
      .send(validRelay)

    const second = await request(app)
      .post('/v1/jito/relay')
      .set('Idempotency-Key', key2)
      .send(validRelay)

    expect(first.body.data.bundleId).not.toBe(second.body.data.bundleId)
  })
})

// ─── Gas Sponsorship Tier Gating ────────────────────────────────────────────

describe('Jito gas sponsorship tier gating', () => {
  let tierApp: express.Application

  beforeEach(async () => {
    resetJitoProvider()
    const { validateRequest } = await import('../src/middleware/validation.js')
    const { idempotency } = await import('../src/middleware/idempotency.js')
    const { betaEndpoint, getBetaWarning } = await import('../src/middleware/beta.js')
    const { ErrorCode } = await import('../src/errors/codes.js')
    const { submitBundle } = await import('../src/services/jito-provider.js')
    const { z } = await import('zod')

    tierApp = express()
    tierApp.use(express.json())

    // Middleware to set tier from X-Test-Tier header
    tierApp.use((req: Request, _res: Response, next: NextFunction) => {
      req.apiKeyTier = (req.headers['x-test-tier'] as any) || 'free'
      next()
    })

    const jitoBeta = betaEndpoint('Jito test')
    const relaySchema = z.object({
      transactions: z.array(z.string().min(1)).min(1).max(5),
      tipLamports: z.string().regex(/^[1-9]\d*$/).default('10000'),
      gasSponsorship: z.boolean().default(false),
    })

    const jitoRouter = Router()
    jitoRouter.post(
      '/jito/relay',
      jitoBeta,
      idempotency,
      validateRequest({ body: relaySchema }),
      async (req: Request, res: Response, next: NextFunction) => {
        try {
          const { transactions, tipLamports, gasSponsorship } = req.body
          if (parseInt(tipLamports, 10) < 1000) {
            res.status(400).json({ success: false, error: { code: ErrorCode.JITO_INVALID_TRANSACTION, message: 'Tip must be at least 1000 lamports' } })
            return
          }
          if (gasSponsorship && req.apiKeyTier !== 'enterprise') {
            res.status(403).json({ success: false, error: { code: ErrorCode.TIER_ACCESS_DENIED, message: 'Gas sponsorship requires enterprise tier. Current: ' + (req.apiKeyTier ?? 'unknown') + '.' } })
            return
          }
          const result = submitBundle({ transactions, tipLamports, gasSponsorship })
          res.json({ success: true, beta: true, warning: getBetaWarning(req), data: result })
        } catch (err) { next(err) }
      },
    )
    tierApp.use('/v1', jitoRouter)
  })

  it('allows enterprise tier with gasSponsorship → 200', async () => {
    const res = await request(tierApp)
      .post('/v1/jito/relay')
      .set('X-Test-Tier', 'enterprise')
      .send({ transactions: ['dHgx'], gasSponsorship: true })
    expect(res.status).toBe(200)
    expect(res.body.data.gasSponsored).toBe(true)
  })

  it('rejects pro tier with gasSponsorship → 403', async () => {
    const res = await request(tierApp)
      .post('/v1/jito/relay')
      .set('X-Test-Tier', 'pro')
      .send({ transactions: ['dHgx'], gasSponsorship: true })
    expect(res.status).toBe(403)
    expect(res.body.error.code).toBe('TIER_ACCESS_DENIED')
  })

  it('rejects free tier with gasSponsorship → 403', async () => {
    const res = await request(tierApp)
      .post('/v1/jito/relay')
      .set('X-Test-Tier', 'free')
      .send({ transactions: ['dHgx'], gasSponsorship: true })
    expect(res.status).toBe(403)
    expect(res.body.error.code).toBe('TIER_ACCESS_DENIED')
    expect(res.body.error.message).toContain('enterprise')
  })

  it('allows any tier without gasSponsorship → 200', async () => {
    const res = await request(tierApp)
      .post('/v1/jito/relay')
      .set('X-Test-Tier', 'free')
      .send({ transactions: ['dHgx'], gasSponsorship: false })
    expect(res.status).toBe(200)
    expect(res.body.data.gasSponsored).toBe(false)
  })
})

// ─── State Transitions ──────────────────────────────────────────────────────

describe('Jito bundle state machine', () => {
  beforeEach(() => {
    resetJitoProvider()
  })

  it('progresses through all states with timestamp control', async () => {
    const submitRes = await request(app)
      .post('/v1/jito/relay')
      .send(validRelay)
    const { bundleId } = submitRes.body.data
    const now = Date.now()

    // submitted (0ms)
    _setBundleTimestamp(bundleId, now)
    let res = await request(app).get(`/v1/jito/bundle/${bundleId}`)
    expect(res.body.data.status).toBe('submitted')

    // bundled (500ms)
    _setBundleTimestamp(bundleId, now - 600)
    res = await request(app).get(`/v1/jito/bundle/${bundleId}`)
    expect(res.body.data.status).toBe('bundled')

    // confirming (1500ms)
    _setBundleTimestamp(bundleId, now - 1600)
    res = await request(app).get(`/v1/jito/bundle/${bundleId}`)
    expect(res.body.data.status).toBe('confirming')

    // confirmed (3000ms)
    _setBundleTimestamp(bundleId, now - 3100)
    res = await request(app).get(`/v1/jito/bundle/${bundleId}`)
    expect(res.body.data.status).toBe('confirmed')
    expect(res.body.data.confirmedAt).toBeDefined()
  })
})
