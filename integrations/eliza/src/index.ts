/**
 * @sip-protocol/plugin-eliza
 *
 * Eliza plugin that gives any AI agent privacy superpowers via Sipher.
 *
 * Usage:
 *   import { sipherPlugin } from '@sip-protocol/plugin-eliza'
 *   // Register in your agent's character config:
 *   plugins: [sipherPlugin]
 */
import type { Plugin } from '@elizaos/core'

import {
  stealthGenerate,
  transferShield,
  scanPayments,
  privacyScore,
  commitmentCreate,
} from './actions/index.js'

import { sipherStatusProvider } from './providers/sipherStatus.js'

export const sipherPlugin: Plugin = {
  name: 'sipher',
  description: 'Privacy-as-a-Skill for AI agents — stealth addresses, shielded transfers, and privacy scoring via SIP Protocol',
  actions: [
    stealthGenerate,
    transferShield,
    scanPayments,
    privacyScore,
    commitmentCreate,
  ],
  providers: [sipherStatusProvider],
}

// Re-export pieces for advanced usage
export { SipherClient, createClient } from './client.js'
export {
  stealthGenerate,
  transferShield,
  scanPayments,
  privacyScore,
  commitmentCreate,
} from './actions/index.js'
export { sipherStatusProvider } from './providers/sipherStatus.js'
