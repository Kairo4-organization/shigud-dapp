import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validation.js'
import { idempotency } from '../middleware/idempotency.js'
import { requireTier } from '../middleware/require-tier.js'
import {
  createDisclosure,
  generateReport,
  getReport,
} from '../services/compliance-provider.js'

const router = Router()
const enterpriseOnly = requireTier('enterprise')

// ─── Schemas ────────────────────────────────────────────────────────────────

const hexString = z.string().regex(/^0x[0-9a-fA-F]+$/, '0x-prefixed hex string')

const viewingKeySchema = z.object({
  key: hexString,
  path: z.string().min(1),
  hash: hexString,
})

const auditorVerificationSchema = z.object({
  auditorKeyHash: hexString,
  nonce: hexString,
})

const discloseSchema = z.object({
  viewingKey: viewingKeySchema,
  transactionData: z.object({
    txHash: z.string().min(1),
    amount: z.string().min(1),
    sender: z.string().min(1),
    receiver: z.string().min(1),
  }),
  scope: z.object({
    type: z.enum(['time_range', 'counterparty', 'amount_threshold', 'full']),
    startTime: z.number().int().positive().optional(),
    endTime: z.number().int().positive().optional(),
    counterparty: z.string().optional(),
    minAmount: z.string().optional(),
  }),
  auditorId: z.string().min(1),
  auditorVerification: auditorVerificationSchema,
})

const reportSchema = z.object({
  viewingKey: viewingKeySchema,
  startTime: z.number().int().positive(),
  endTime: z.number().int().positive(),
  auditorId: z.string().min(1),
  auditorVerification: auditorVerificationSchema,
  includeCounterparties: z.boolean().optional(),
}).refine(data => data.endTime > data.startTime, {
  message: 'endTime must be greater than startTime',
  path: ['endTime'],
})

const reportIdPattern = z.string().regex(/^rpt_[0-9a-fA-F]{64}$/, 'Report ID (rpt_ + 64 hex chars)')

// ─── POST /compliance/disclose ──────────────────────────────────────────────

router.post(
  '/compliance/disclose',
  enterpriseOnly,
  idempotency,
  validateRequest({ body: discloseSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = createDisclosure(req.body)
      res.json({ success: true, data: result })
    } catch (err) {
      next(err)
    }
  }
)

// ─── POST /compliance/report ────────────────────────────────────────────────

router.post(
  '/compliance/report',
  enterpriseOnly,
  idempotency,
  validateRequest({ body: reportSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = generateReport(req.body)
      res.json({ success: true, data: result })
    } catch (err) {
      next(err)
    }
  }
)

// ─── GET /compliance/report/:id ─────────────────────────────────────────────

router.get(
  '/compliance/report/:id',
  enterpriseOnly,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.params.id as string
      const parsed = reportIdPattern.safeParse(id)
      if (!parsed.success) {
        res.status(400).json({
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid report ID format. Expected rpt_ + 64 hex chars.',
          },
        })
        return
      }

      const report = getReport(id)
      if (!report) {
        res.status(404).json({
          success: false,
          error: {
            code: 'COMPLIANCE_REPORT_NOT_FOUND',
            message: `Report not found: ${id}`,
          },
        })
        return
      }

      res.json({ success: true, data: report })
    } catch (err) {
      next(err)
    }
  }
)

export default router
