/**
 * SCAN_PAYMENTS — Scan for incoming stealth payments.
 *
 * Uses the agent's viewing private key to detect payments addressed
 * to them without revealing identity on-chain.
 */
import type { Action, HandlerCallback, IAgentRuntime, Memory, State } from '@elizaos/core'
import { createClient } from '../client.js'

interface ScanResult {
  scanned: number
  payments: Array<{
    stealthAddress: string
    ephemeralPublicKey: string
    amount?: string
  }>
}

export const scanPayments: Action = {
  name: 'SCAN_PAYMENTS',
  similes: [
    'CHECK_PAYMENTS',
    'DETECT_STEALTH_PAYMENTS',
    'SCAN_STEALTH',
  ],
  description:
    'Scan the blockchain for incoming stealth payments. Uses your viewing private key ' +
    'to detect payments without revealing your identity on-chain.',

  examples: [
    [
      { name: 'user', content: { text: 'Check if anyone sent me private payments' } },
      { name: 'agent', content: { text: 'Scanning for incoming stealth payments.', actions: ['SCAN_PAYMENTS'] } },
    ],
    [
      { name: 'user', content: { text: 'Scan for stealth transfers to my address' } },
      { name: 'agent', content: { text: 'Scanning the network for stealth payments.', actions: ['SCAN_PAYMENTS'] } },
    ],
  ],

  validate: async (_runtime: IAgentRuntime, message: Memory): Promise<boolean> => {
    const text = (message.content?.text ?? '').toLowerCase()
    return /scan|check\s*payment|incoming|detect/.test(text)
  },

  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    _state?: State,
    options?: Record<string, unknown>,
    callback?: HandlerCallback,
  ) => {
    const client = createClient(runtime)

    const viewingPrivateKey =
      (options?.viewingPrivateKey as string) ??
      runtime.getSetting('SIPHER_VIEWING_PRIVATE_KEY')

    const spendingPublicKey =
      (options?.spendingPublicKey as string) ??
      runtime.getSetting('SIPHER_SPENDING_PUBLIC_KEY')

    if (!viewingPrivateKey || !spendingPublicKey) {
      const msg =
        'I need viewing + spending keys to scan for payments. ' +
        'Set SIPHER_VIEWING_PRIVATE_KEY and SIPHER_SPENDING_PUBLIC_KEY in agent settings, ' +
        'or pass them via options.'
      if (callback) await callback({ text: msg })
      return { success: false, text: msg }
    }

    const limit = Number(options?.limit) || 10

    const result = await client.request<ScanResult>('/v1/scan/payments', {
      viewingPrivateKey,
      spendingPublicKey,
      limit,
    })

    const found = result.payments.length
    const response =
      `Scan complete: checked ${result.scanned} announcements, found ${found} payment${found !== 1 ? 's' : ''}` +
      (found > 0
        ? ':\n' + result.payments.map((p, i) =>
            `  ${i + 1}. ${p.stealthAddress.slice(0, 20)}...${p.amount ? ` (${p.amount} lamports)` : ''}`
          ).join('\n')
        : '.')

    if (callback) await callback({ text: response })
    return { success: true, text: response, data: result }
  },
}
