import { Router, Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { validateRequest } from '../middleware/validation.js'
import { idempotency } from '../middleware/idempotency.js'
import {
  buildPrivateTransfer,
  isTransferSupported,
  getSupportedTransferChains,
} from '../services/chain-transfer-builder.js'
import { ErrorCode, getErrorEntry } from '../errors/codes.js'

const router = Router()

// ─── Supported Chains (accept all 17, dispatch handles 422) ─────────────────

const ALL_CHAINS = [
  'solana', 'near', 'aptos', 'sui',
  'ethereum', 'polygon', 'arbitrum', 'optimism', 'base',
  'bitcoin', 'zcash',
  'cosmos', 'osmosis', 'injective', 'celestia', 'sei', 'dydx',
] as const

const hexStringAny = z.string().regex(
  /^0x[0-9a-fA-F]{64,66}$/,
  'Must be 0x-prefixed 32-byte (ed25519) or 33-byte (secp256k1) hex',
)

const privateTransferSchema = z.object({
  sender: z.string().min(1),
  recipientMetaAddress: z.object({
    spendingKey: hexStringAny,
    viewingKey: hexStringAny,
    chain: z.enum(ALL_CHAINS),
    label: z.string().optional(),
  }),
  amount: z.string().regex(/^[1-9]\d*$/, 'Must be a positive integer'),
  token: z.string().min(1).optional(),
})

// ─── Route ──────────────────────────────────────────────────────────────────

router.post(
  '/transfer/private',
  idempotency,
  validateRequest({ body: privateTransferSchema }),
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sender, recipientMetaAddress, amount, token } = req.body
      const chain = recipientMetaAddress.chain

      // Check chain support before attempting transfer
      if (!isTransferSupported(chain)) {
        const entry = getErrorEntry(ErrorCode.CHAIN_TRANSFER_UNSUPPORTED)
        res.status(entry?.httpStatus ?? 422).json({
          success: false,
          error: {
            code: ErrorCode.CHAIN_TRANSFER_UNSUPPORTED,
            message: `Private transfers are not yet supported for chain: ${chain}`,
            supportedChains: getSupportedTransferChains(),
          },
        })
        return
      }

      const result = await buildPrivateTransfer({
        sender,
        recipientMetaAddress,
        amount,
        token,
      })

      res.json({ success: true, data: result })
    } catch (err) {
      next(err)
    }
  },
)

export default router
