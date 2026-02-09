/**
 * COMMITMENT_CREATE — Create a Pedersen commitment.
 *
 * Hides a transaction amount using a cryptographic commitment that can
 * be verified later without revealing the value. Supports homomorphic ops.
 */
import type { Action, HandlerCallback, IAgentRuntime, Memory, State } from '@elizaos/core'
import { createClient } from '../client.js'

interface CommitmentResult {
  commitment: string
  blindingFactor: string
}

const VALUE_RE = /(\d+(?:\.\d+)?)/

export const commitmentCreate: Action = {
  name: 'COMMITMENT_CREATE',
  similes: [
    'CREATE_COMMITMENT',
    'HIDE_AMOUNT',
    'PEDERSEN_COMMIT',
  ],
  description:
    'Create a Pedersen commitment to hide a transaction amount. ' +
    'The commitment can be verified later without revealing the value.',

  examples: [
    [
      { name: 'user', content: { text: 'Hide the amount 1000000000 with a commitment' } },
      { name: 'agent', content: { text: 'Creating a Pedersen commitment for that amount.', actions: ['COMMITMENT_CREATE'] } },
    ],
    [
      { name: 'user', content: { text: 'I need to commit to a value of 5 SOL' } },
      { name: 'agent', content: { text: 'Generating a Pedersen commitment for 5 SOL.', actions: ['COMMITMENT_CREATE'] } },
    ],
  ],

  validate: async (_runtime: IAgentRuntime, message: Memory): Promise<boolean> => {
    const text = (message.content?.text ?? '').toLowerCase()
    return /commitment|hide\s*amount|pedersen/.test(text)
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

    const rawValue = (options?.value as string) ?? text.match(VALUE_RE)?.[1]

    if (!rawValue) {
      const msg = 'I need a numeric value to create a commitment. Provide an amount in lamports or SOL.'
      if (callback) await callback({ text: msg })
      return { success: false, text: msg }
    }

    // Convert SOL-like values to lamports
    const num = parseFloat(rawValue)
    const value = num < 1000 ? String(Math.round(num * 1e9)) : String(Math.round(num))

    const result = await client.request<CommitmentResult>('/v1/commitment/create', { value })

    const response =
      `Pedersen commitment created:\n` +
      `  Commitment: ${result.commitment.slice(0, 24)}...\n` +
      `  Blinding factor: ${result.blindingFactor.slice(0, 24)}...\n` +
      `  Value: ${value} lamports\n` +
      'Keep the blinding factor secret — you\'ll need it to open/verify the commitment.'

    if (callback) await callback({ text: response })
    return { success: true, text: response, data: result }
  },
}
