import { describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'
import express from 'express'
import { Router } from 'express'
import {
  createApiKey,
  validateApiKey,
  revokeApiKey,
  listApiKeys,
  getApiKeyById,
  isRateLimited,
  trackUsage,
  getRemainingRequests,
  isEndpointAllowed,
  resetApiKeyService,
  getTierLimits,
} from '../src/services/api-keys.js'
import { tieredRateLimiter } from '../src/middleware/rate-limit.js'
import { TIER_LIMITS } from '../src/types/api-key.js'

describe('API Keys Service', () => {
  beforeEach(() => {
    resetApiKeyService()
  })

  describe('createApiKey', () => {
    it('should create a free tier key with correct prefix', () => {
      const key = createApiKey('free', 'Test Free')
      expect(key.tier).toBe('free')
      expect(key.name).toBe('Test Free')
      expect(key.key).toMatch(/^sk_free_/)
      expect(key.id).toBeDefined()
      expect(key.createdAt).toBeDefined()
    })

    it('should create a pro tier key with correct prefix', () => {
      const key = createApiKey('pro', 'Test Pro')
      expect(key.tier).toBe('pro')
      expect(key.key).toMatch(/^sk_pro_/)
    })

    it('should create an enterprise tier key with correct prefix', () => {
      const key = createApiKey('enterprise', 'Test Enterprise')
      expect(key.tier).toBe('enterprise')
      expect(key.key).toMatch(/^sk_ent_/)
    })

    it('should create key with expiry date', () => {
      const expiresAt = new Date(Date.now() + 86400000).toISOString()
      const key = createApiKey('pro', 'Expiring Key', { expiresAt })
      expect(key.expiresAt).toBe(expiresAt)
    })

    it('should create key with metadata', () => {
      const key = createApiKey('pro', 'With Meta', { metadata: { team: 'alpha' } })
      expect(key.metadata).toEqual({ team: 'alpha' })
    })
  })

  describe('validateApiKey', () => {
    it('should validate a valid key', () => {
      const created = createApiKey('pro', 'Valid Key')
      const validated = validateApiKey(created.key)
      expect(validated).not.toBeNull()
      expect(validated?.id).toBe(created.id)
      expect(validated?.tier).toBe('pro')
    })

    it('should return null for invalid key', () => {
      const validated = validateApiKey('sk_pro_invalid123')
      expect(validated).toBeNull()
    })

    it('should return null for revoked key', () => {
      const created = createApiKey('pro', 'Revoked Key')
      revokeApiKey(created.id)
      const validated = validateApiKey(created.key)
      expect(validated).toBeNull()
    })

    it('should return null for expired key', () => {
      const expiresAt = new Date(Date.now() - 1000).toISOString() // Expired
      const created = createApiKey('pro', 'Expired Key', { expiresAt })
      const validated = validateApiKey(created.key)
      expect(validated).toBeNull()
    })
  })

  describe('revokeApiKey', () => {
    it('should revoke an existing key', () => {
      const created = createApiKey('pro', 'To Revoke')
      const result = revokeApiKey(created.id)
      expect(result).toBe(true)
      const key = getApiKeyById(created.id)
      expect(key?.revokedAt).toBeDefined()
    })

    it('should return false for non-existent key', () => {
      const result = revokeApiKey('nonexistent')
      expect(result).toBe(false)
    })
  })

  describe('listApiKeys', () => {
    it('should list all keys with masked values', () => {
      createApiKey('free', 'Key 1')
      createApiKey('pro', 'Key 2')
      const keys = listApiKeys()
      expect(keys).toHaveLength(2)
      expect(keys[0].key).toMatch(/^sk_free_\w+\.\.\.\w+$/)
    })
  })

  describe('getTierLimits', () => {
    it('should return correct limits for free tier', () => {
      const limits = getTierLimits('free')
      expect(limits.requestsPerHour).toBe(100)
      expect(limits.burstLimit).toBe(10)
    })

    it('should return correct limits for pro tier', () => {
      const limits = getTierLimits('pro')
      expect(limits.requestsPerHour).toBe(10_000)
      expect(limits.allowedEndpoints).toBe('*')
    })

    it('should return correct limits for enterprise tier', () => {
      const limits = getTierLimits('enterprise')
      expect(limits.requestsPerHour).toBe(100_000)
    })
  })
})

describe('Rate Limiting', () => {
  beforeEach(() => {
    resetApiKeyService()
  })

  describe('trackUsage', () => {
    it('should track request count', () => {
      const key = createApiKey('free', 'Track Test')
      trackUsage(key.id)
      trackUsage(key.id)
      trackUsage(key.id)
      const remaining = getRemainingRequests(key.id, 'free')
      expect(remaining).toBe(97) // 100 - 3
    })
  })

  describe('isRateLimited', () => {
    it('should not be limited initially', () => {
      const key = createApiKey('free', 'Limit Test')
      expect(isRateLimited(key.id, 'free')).toBe(false)
    })

    it('should be limited after exceeding quota', () => {
      const key = createApiKey('free', 'Exceed Test')
      // Free tier: 100 requests/hour
      for (let i = 0; i < 100; i++) {
        trackUsage(key.id)
      }
      expect(isRateLimited(key.id, 'free')).toBe(true)
    })

    it('should not be limited for higher tier', () => {
      const key = createApiKey('pro', 'Pro Test')
      // Pro tier: 10,000 requests/hour
      for (let i = 0; i < 100; i++) {
        trackUsage(key.id)
      }
      expect(isRateLimited(key.id, 'pro')).toBe(false)
    })
  })
})

describe('Endpoint Access Control', () => {
  describe('isEndpointAllowed', () => {
    it('should allow basic endpoints for free tier', () => {
      expect(isEndpointAllowed('free', '/v1/stealth/generate')).toBe(true)
      expect(isEndpointAllowed('free', '/v1/commitment/create')).toBe(true)
      expect(isEndpointAllowed('free', '/v1/health')).toBe(true)
    })

    it('should deny advanced endpoints for free tier', () => {
      expect(isEndpointAllowed('free', '/v1/proofs/funding/generate')).toBe(false)
      expect(isEndpointAllowed('free', '/v1/cspl/wrap')).toBe(false)
      expect(isEndpointAllowed('free', '/v1/privacy/score')).toBe(false)
    })

    it('should allow all endpoints for pro tier', () => {
      expect(isEndpointAllowed('pro', '/v1/proofs/funding/generate')).toBe(true)
      expect(isEndpointAllowed('pro', '/v1/cspl/wrap')).toBe(true)
      expect(isEndpointAllowed('pro', '/v1/privacy/score')).toBe(true)
    })

    it('should allow all endpoints for enterprise tier', () => {
      expect(isEndpointAllowed('enterprise', '/v1/proofs/funding/generate')).toBe(true)
      expect(isEndpointAllowed('enterprise', '/v1/admin/keys')).toBe(true)
    })
  })
})

describe('Tier Limits Configuration', () => {
  it('should have correct free tier config', () => {
    expect(TIER_LIMITS.free.requestsPerHour).toBe(100)
    expect(TIER_LIMITS.free.burstLimit).toBe(10)
    expect(Array.isArray(TIER_LIMITS.free.allowedEndpoints)).toBe(true)
  })

  it('should have correct pro tier config', () => {
    expect(TIER_LIMITS.pro.requestsPerHour).toBe(10_000)
    expect(TIER_LIMITS.pro.burstLimit).toBe(100)
    expect(TIER_LIMITS.pro.allowedEndpoints).toBe('*')
  })

  it('should have correct enterprise tier config', () => {
    expect(TIER_LIMITS.enterprise.requestsPerHour).toBe(100_000)
    expect(TIER_LIMITS.enterprise.burstLimit).toBe(1000)
    expect(TIER_LIMITS.enterprise.allowedEndpoints).toBe('*')
  })
})

describe('API Key Integration', () => {
  let app: express.Application

  beforeEach(() => {
    resetApiKeyService()
    app = express()
    app.use(express.json())

    // Custom auth middleware that always validates keys (for testing)
    const testAuth = (req: express.Request, res: express.Response, next: express.NextFunction) => {
      const apiKeyHeader = req.headers['x-api-key']
      if (typeof apiKeyHeader !== 'string') {
        req.apiKeyTier = 'free' // Default for unauthenticated
        return next()
      }

      const keyConfig = validateApiKey(apiKeyHeader)
      if (keyConfig) {
        req.apiKey = keyConfig
        req.apiKeyTier = keyConfig.tier
      } else {
        req.apiKeyTier = 'free'
      }
      next()
    }

    // Set up a test route with custom auth
    const router = Router()
    router.get('/test', testAuth, tieredRateLimiter, (req, res) => {
      res.json({
        success: true,
        tier: req.apiKeyTier,
        keyId: req.apiKey?.id,
      })
    })
    app.use('/v1', router)

    // Health endpoint (no auth needed)
    app.get('/v1/health', (_req, res) => {
      res.json({ status: 'ok' })
    })
  })

  it('should allow request with valid API key', async () => {
    const key = createApiKey('pro', 'Integration Test')

    const res = await request(app)
      .get('/v1/test')
      .set('X-API-Key', key.key)

    expect(res.status).toBe(200)
    expect(res.body.success).toBe(true)
    expect(res.body.tier).toBe('pro')
  })

  it('should include rate limit headers', async () => {
    const key = createApiKey('pro', 'Headers Test')

    const res = await request(app)
      .get('/v1/test')
      .set('X-API-Key', key.key)

    expect(res.headers['x-ratelimit-tier']).toBe('pro')
    expect(res.headers['x-ratelimit-limit']).toBe('10000')
    expect(res.headers['x-ratelimit-remaining']).toBeDefined()
  })

  it('should allow health endpoint without auth', async () => {
    const res = await request(app).get('/v1/health')
    expect(res.status).toBe(200)
  })

  it('should return free tier for invalid key', async () => {
    const res = await request(app)
      .get('/v1/test')
      .set('X-API-Key', 'sk_invalid_key')

    expect(res.status).toBe(200)
    expect(res.body.tier).toBe('free')
  })
})
