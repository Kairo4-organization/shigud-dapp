import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validation.js'
import { idempotency } from '../middleware/idempotency.js'
import { betaEndpoint, getBetaWarning } from '../middleware/beta.js'
import { generateRangeProof, verifyRangeProof } from '../services/stark-provider.js'

const rangeBeta = betaEndpoint('STARK range proofs use a mock prover. Real Murkl STARK integration coming soon.')

const router = Router()

// ─── Schemas ────────────────────────────────────────────────────────────────

const hex32 = z.string().regex(/^0x[0-9a-fA-F]{64}$/, '0x-prefixed 32-byte hex string')
const hexString = z.string().regex(/^0x[0-9a-fA-F]+$/, '0x-prefixed hex string')
const nonNegativeIntString = z.string().regex(/^[0-9]+$/, 'Non-negative integer string')

const rangeGenerateSchema = z.object({
  value: nonNegativeIntString,
  threshold: nonNegativeIntString,
  blindingFactor: hex32,
  commitment: hexString.optional(),
})

const rangeVerifySchema = z.object({
  type: z.literal('range'),
  proof: hexString,
  publicInputs: z.array(hexString),
})

// ─── Generate ───────────────────────────────────────────────────────────────

router.post(
  '/proofs/range/generate',
  rangeBeta,
  idempotency,
  validateRequest({ body: rangeGenerateSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { value, threshold, blindingFactor, commitment } = req.body

      const result = await generateRangeProof({
        value: BigInt(value),
        threshold: BigInt(threshold),
        blindingFactor,
        commitment,
      })

      res.json({
        success: true,
        beta: true,
        warning: getBetaWarning(req),
        data: result,
      })
    } catch (err) {
      next(err)
    }
  }
)

// ─── Verify ─────────────────────────────────────────────────────────────────

router.post(
  '/proofs/range/verify',
  validateRequest({ body: rangeVerifySchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { proof, publicInputs } = req.body

      const valid = await verifyRangeProof({ proof, publicInputs })

      res.json({
        success: true,
        data: { valid },
      })
    } catch (err) {
      next(err)
    }
  }
)

export default router
