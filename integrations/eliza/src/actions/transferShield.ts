/**
 * TRANSFER_SHIELD — Build an unsigned shielded transfer.
 *
 * Derives a one-time stealth address from the recipient's meta-address
 * and returns an unsigned transaction the sender signs with their wallet.
 */
import type { Action, HandlerCallback, IAgentRuntime, Memory, State } from '@elizaos/core'
import { createClient } from '../client.js'

interface ShieldResult {
  transaction: string
  stealthAddress: string
  commitment: string
  ephemeralPublicKey: string
}

// Base58 address pattern (32-44 chars)
const ADDR_RE = /[1-9A-HJ-NP-Za-km-z]{32,44}/g
// Amount in lamports or SOL-like
const AMOUNT_RE = /(\d+(?:\.\d+)?)\s*(?:sol|lamports?)?/i

export const transferShield: Action = {
  name: 'TRANSFER_SHIELD',
  similes: [
    'SHIELD_TRANSFER',
    'PRIVATE_SEND',
    'STEALTH_TRANSFER',
  ],
  description:
    'Build an unsigned shielded transfer transaction. Sends funds to a one-time stealth ' +
    'address derived from the recipient\'s meta-address. Returns an unsigned tx to sign.',

  examples: [
    [
      { name: 'user', content: { text: 'Shield 1 SOL to this stealth address' } },
      { name: 'agent', content: { text: 'Building a shielded transfer of 1 SOL.', actions: ['TRANSFER_SHIELD'] } },
    ],
    [
      { name: 'user', content: { text: 'Send 500000000 lamports privately' } },
      { name: 'agent', content: { text: 'Creating a shielded transfer for 0.5 SOL.', actions: ['TRANSFER_SHIELD'] } },
    ],
  ],

  validate: async (_runtime: IAgentRuntime, message: Memory): Promise<boolean> => {
    const text = (message.content?.text ?? '').toLowerCase()
    return /shield|shielded|send\s*privat|private\s*transfer/.test(text)
  },

  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    _state?: State,
    options?: Record<string, unknown>,
    callback?: HandlerCallback,
  ) => {
    const client = createClient(runtime)
    const text = message.content?.text ?? ''

    // Extract params from message or options
    const sender = (options?.sender as string) ?? extractAddress(text, 0)
    const recipientSpendingKey = (options?.recipientSpendingKey as string) ?? extractAddress(text, 1)
    const recipientViewingKey = (options?.recipientViewingKey as string) ?? extractAddress(text, 2)
    const amount = (options?.amount as string) ?? extractAmount(text)

    if (!sender || !recipientSpendingKey || !recipientViewingKey || !amount) {
      const msg =
        'I need more info to build a shielded transfer:\n' +
        `  sender: ${sender ? 'OK' : 'missing'}\n` +
        `  recipientSpendingKey: ${recipientSpendingKey ? 'OK' : 'missing'}\n` +
        `  recipientViewingKey: ${recipientViewingKey ? 'OK' : 'missing'}\n` +
        `  amount: ${amount ? 'OK' : 'missing'}`
      if (callback) await callback({ text: msg })
      return { success: false, text: msg }
    }

    const result = await client.request<ShieldResult>('/v1/transfer/shield', {
      sender,
      recipientMetaAddress: {
        spendingKey: recipientSpendingKey,
        viewingKey: recipientViewingKey,
        chain: (options?.chain as string) ?? 'solana',
      },
      amount,
    })

    const response =
      `Shielded transfer built:\n` +
      `  Stealth address: ${result.stealthAddress.slice(0, 20)}...\n` +
      `  Amount: ${amount} lamports\n` +
      `  Tx size: ${result.transaction.length} bytes\n` +
      'Sign the returned transaction with your wallet and submit to the network.'

    if (callback) await callback({ text: response })
    return { success: true, text: response, data: result }
  },
}

function extractAddress(text: string, index: number): string | undefined {
  const matches = text.match(ADDR_RE)
  return matches?.[index]
}

function extractAmount(text: string): string | undefined {
  const match = text.match(AMOUNT_RE)
  if (!match) return undefined
  const num = parseFloat(match[1])
  // If it looks like SOL (< 1000), convert to lamports
  if (num < 1000) return String(Math.round(num * 1e9))
  return String(Math.round(num))
}
