/**
 * PRIVACY_SCORE — Analyze wallet privacy.
 *
 * Returns a 0-100 score with factor breakdown and recommendations
 * for improving transaction privacy.
 */
import type { Action, HandlerCallback, IAgentRuntime, Memory, State } from '@elizaos/core'
import { createClient } from '../client.js'

interface ScoreResult {
  score: number
  grade: string
  factors: Array<{ name: string; score: number; weight: number }>
  recommendations: string[]
  surveillanceScore: number
}

const ADDR_RE = /[1-9A-HJ-NP-Za-km-z]{32,44}/

export const privacyScore: Action = {
  name: 'PRIVACY_SCORE',
  similes: [
    'CHECK_PRIVACY',
    'WALLET_PRIVACY',
    'ANALYZE_PRIVACY',
  ],
  description:
    'Analyze a wallet address for privacy vulnerabilities. Returns a 0-100 score ' +
    'with factor breakdown and actionable recommendations.',

  examples: [
    [
      { name: 'user', content: { text: 'What\'s my wallet privacy score?' } },
      { name: 'agent', content: { text: 'Analyzing your wallet\'s privacy posture.', actions: ['PRIVACY_SCORE'] } },
    ],
    [
      { name: 'user', content: { text: 'Check if this address is being tracked: GsbwXf...' } },
      { name: 'agent', content: { text: 'Running a privacy analysis on that address.', actions: ['PRIVACY_SCORE'] } },
    ],
  ],

  validate: async (_runtime: IAgentRuntime, message: Memory): Promise<boolean> => {
    const text = (message.content?.text ?? '').toLowerCase()
    return /privacy\s*score|analyze|wallet\s*privacy|surveillance/.test(text)
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

    const address =
      (options?.address as string) ??
      text.match(ADDR_RE)?.[0] ??
      runtime.getSetting('WALLET_ADDRESS')

    if (!address) {
      const msg = 'I need a wallet address to analyze. Include it in your message or set WALLET_ADDRESS in settings.'
      if (callback) await callback({ text: msg })
      return { success: false, text: msg }
    }

    const result = await client.request<ScoreResult>('/v1/privacy/score', {
      address,
      limit: 10,
    })

    const recs = result.recommendations.slice(0, 3).map(r => `  - ${r}`).join('\n')
    const response =
      `Privacy analysis for ${address.slice(0, 12)}...:\n` +
      `  Score: ${result.score}/100 (${result.grade})\n` +
      `  Surveillance risk: ${result.surveillanceScore}/100\n` +
      (recs ? `  Recommendations:\n${recs}` : '')

    if (callback) await callback({ text: response })
    return { success: true, text: response, data: result }
  },
}
