/**
 * STEALTH_GENERATE — Generate a stealth meta-address keypair.
 *
 * Produces spending + viewing keys that a sender can use to derive
 * one-time stealth addresses, enabling private payments on 17 chains.
 */
import type { Action, HandlerCallback, IAgentRuntime, Memory, State } from '@elizaos/core'
import { createClient } from '../client.js'

interface StealthResult {
  metaAddress: {
    spendingKey: string
    viewingKey: string
    chain: string
  }
  viewingPrivateKey: string
}

const CHAINS = ['solana', 'ethereum', 'polygon', 'arbitrum', 'optimism', 'base', 'near', 'cosmos', 'bitcoin']
const CHAIN_RE = new RegExp(`\\b(${CHAINS.join('|')})\\b`, 'i')

export const stealthGenerate: Action = {
  name: 'STEALTH_GENERATE',
  similes: [
    'GENERATE_STEALTH',
    'CREATE_STEALTH_ADDRESS',
    'NEW_PRIVACY_KEYPAIR',
  ],
  description:
    'Generate a stealth meta-address keypair for receiving private payments. ' +
    'Supports Solana, Ethereum, NEAR, Cosmos, Bitcoin, and more.',

  examples: [
    [
      { name: 'user', content: { text: 'Generate a stealth address for me' } },
      { name: 'agent', content: { text: 'I\'ll generate a stealth meta-address keypair for Solana.', actions: ['STEALTH_GENERATE'] } },
    ],
    [
      { name: 'user', content: { text: 'I need a private Ethereum address to receive funds' } },
      { name: 'agent', content: { text: 'Creating an Ethereum stealth keypair now.', actions: ['STEALTH_GENERATE'] } },
    ],
  ],

  validate: async (_runtime: IAgentRuntime, message: Memory): Promise<boolean> => {
    const text = (message.content?.text ?? '').toLowerCase()
    return /stealth|private\s*address|keypair|receive\s*privat/.test(text)
  },

  handler: async (
    runtime: IAgentRuntime,
    message: Memory,
    _state?: State,
    _options?: Record<string, unknown>,
    callback?: HandlerCallback,
  ) => {
    const client = createClient(runtime)
    const text = (message.content?.text ?? '').toLowerCase()
    const chainMatch = text.match(CHAIN_RE)
    const chain = chainMatch ? chainMatch[1].toLowerCase() : 'solana'

    const result = await client.request<StealthResult>('/v1/stealth/generate', { chain })
    const { spendingKey, viewingKey } = result.metaAddress

    const response =
      `Generated ${chain} stealth meta-address:\n` +
      `  Spending key: ${spendingKey.slice(0, 16)}...\n` +
      `  Viewing key:  ${viewingKey.slice(0, 16)}...\n` +
      'Share these public keys with senders so they can derive one-time addresses for you.'

    if (callback) {
      await callback({ text: response })
    }

    return { success: true, text: response, data: result }
  },
}
