import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validation.js'
import { idempotency } from '../middleware/idempotency.js'
import { betaEndpoint, getBetaWarning } from '../middleware/beta.js'
import {
  submitComputation,
  getComputationStatus,
  decryptResult,
  getSupportedCircuits,
} from '../services/arcium-provider.js'

const arciumBeta = betaEndpoint('Arcium MPC uses a mock provider. Real Arcium cluster integration coming soon.')

const router = Router()

// ─── Schemas ────────────────────────────────────────────────────────────────

const hexString = z.string().regex(/^0x[0-9a-fA-F]+$/, '0x-prefixed hex string')
const computationIdPattern = z.string().regex(/^arc_[0-9a-fA-F]{64}$/, 'Arcium computation ID (arc_ + 64 hex chars)')

const computeSchema = z.object({
  circuitId: z.enum(['private_transfer', 'check_balance', 'validate_swap']),
  encryptedInputs: z.array(hexString).min(1).max(10),
  chain: z.string().default('solana'),
  cipher: z.enum(['aes128', 'aes192', 'aes256', 'rescue']).default('aes256'),
  viewingKey: z.object({
    key: hexString,
    path: z.string(),
    hash: hexString,
  }).optional(),
  cluster: z.string().optional(),
  timeout: z.number().int().positive().optional(),
})

const decryptSchema = z.object({
  computationId: computationIdPattern,
  viewingKey: z.object({
    key: hexString,
    path: z.string(),
    hash: hexString,
  }),
})

// ─── POST /arcium/compute ───────────────────────────────────────────────────

router.post(
  '/arcium/compute',
  arciumBeta,
  idempotency,
  validateRequest({ body: computeSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { circuitId, encryptedInputs, chain, cipher, viewingKey, cluster, timeout } = req.body

      const result = submitComputation({
        circuitId,
        encryptedInputs,
        chain,
        cipher,
        cluster,
        viewingKeyHash: viewingKey?.hash,
        timeout,
      })

      res.json({
        success: true,
        beta: true,
        warning: getBetaWarning(req),
        data: {
          ...result,
          supportedCircuits: getSupportedCircuits(),
        },
      })
    } catch (err) {
      next(err)
    }
  }
)

// ─── GET /arcium/compute/:id/status ─────────────────────────────────────────

router.get(
  '/arcium/compute/:id/status',
  arciumBeta,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string
      const result = getComputationStatus(id)

      if (!result) {
        res.status(404).json({
          success: false,
          error: {
            code: 'ARCIUM_COMPUTATION_NOT_FOUND',
            message: `Computation not found: ${id}`,
          },
        })
        return
      }

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

// ─── POST /arcium/decrypt ───────────────────────────────────────────────────

router.post(
  '/arcium/decrypt',
  arciumBeta,
  validateRequest({ body: decryptSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { computationId, viewingKey } = req.body
      const result = decryptResult(computationId, viewingKey.hash)

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

export default router
