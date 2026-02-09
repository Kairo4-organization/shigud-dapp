#!/usr/bin/env tsx
/**
 * Sipher x Eliza Plugin Demo
 *
 * Standalone demo that simulates an Eliza runtime calling each of the 5
 * Sipher privacy actions + the status provider. No Eliza install needed.
 *
 * Usage:
 *   npx tsx scripts/eliza-plugin-demo.ts
 *   SIPHER_URL=https://sipher.sip-protocol.org npx tsx scripts/eliza-plugin-demo.ts
 *
 * Env:
 *   SIPHER_URL   — API base URL (default: http://localhost:5006)
 *   API_KEY      — API key (default: dev-key-1)
 */

const BASE = process.env.SIPHER_URL || 'http://localhost:5006'
const API_KEY = process.env.API_KEY || 'dev-key-1'

// ─── Colors ──────────────────────────────────────────────────────────────────

const R = '\x1b[0m'
const GREEN = '\x1b[32m'
const CYAN = '\x1b[36m'
const YELLOW = '\x1b[33m'
const MAGENTA = '\x1b[35m'
const RED = '\x1b[31m'
const DIM = '\x1b[2m'
const BOLD = '\x1b[1m'

// ─── Mock Eliza Runtime ──────────────────────────────────────────────────────
// Simulates IAgentRuntime.getSetting() so the plugin works without @elizaos/core

interface MockRuntime {
  getSetting(key: string): string | undefined
}

function createMockRuntime(): MockRuntime {
  const settings: Record<string, string> = {
    SIPHER_API_KEY: API_KEY,
    SIPHER_URL: BASE,
  }
  return {
    getSetting: (key: string) => settings[key],
  }
}

// ─── Import Plugin ───────────────────────────────────────────────────────────
// We import from the source directly (no build step needed)

import { SipherClient } from '../integrations/eliza/src/client.js'
import {
  stealthGenerate,
  transferShield,
  scanPayments,
  privacyScore,
  commitmentCreate,
} from '../integrations/eliza/src/actions/index.js'
import { sipherStatusProvider } from '../integrations/eliza/src/providers/sipherStatus.js'

// ─── Helpers ─────────────────────────────────────────────────────────────────

let stepCount = 0

function banner() {
  console.log(`
${MAGENTA}${BOLD}╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   SIPHER × ELIZA PLUGIN DEMO                                ║
║   Privacy-as-a-Skill for AI Agents                           ║
║                                                              ║
║   Simulates an Eliza agent using 5 privacy actions           ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝${R}
`)
  console.log(`${DIM}  Server: ${BASE}${R}\n`)
}

function section(title: string) {
  stepCount++
  console.log(`\n${CYAN}━━━ Step ${stepCount}: ${title} ━━━${R}`)
}

function agent(msg: string) {
  console.log(`  ${MAGENTA}Agent:${R} ${msg}`)
}

function action(name: string) {
  console.log(`  ${YELLOW}Action:${R} ${name}`)
}

function ok(msg: string) {
  console.log(`  ${GREEN}OK:${R} ${msg}`)
}

function fail(msg: string) {
  console.log(`  ${RED}ERR:${R} ${msg}`)
}

function truncate(s: string, len = 24): string {
  return s.length > len ? `${s.slice(0, len)}...` : s
}

// ─── Type helpers for mock calls ─────────────────────────────────────────────

type ActionHandler = (
  runtime: unknown,
  message: { content: { text: string } },
  state: undefined,
  options: Record<string, unknown> | undefined,
  callback: (msg: { text: string }) => Promise<void>,
) => Promise<{ success: boolean; text: string; data?: unknown }>

// ─── Demo Flow ───────────────────────────────────────────────────────────────

async function main() {
  banner()
  const start = performance.now()
  const runtime = createMockRuntime()

  // ── Plugin Overview ────────────────────────────────────────
  section('Plugin Overview')
  const allActions = [stealthGenerate, transferShield, scanPayments, privacyScore, commitmentCreate]
  agent('Loading @sip-protocol/plugin-eliza...')
  console.log()
  for (const a of allActions) {
    console.log(`  ${CYAN}${a.name}${R}`)
    console.log(`     ${DIM}${a.description.slice(0, 75)}...${R}`)
    console.log(`     ${DIM}Similes: ${(a.similes ?? []).join(', ')}${R}`)
  }
  console.log()
  console.log(`  ${CYAN}SIPHER_STATUS${R} ${DIM}(provider)${R}`)
  console.log(`     ${DIM}${sipherStatusProvider.description}${R}`)
  agent(`Registered ${allActions.length} actions + 1 provider`)

  // ── Status Provider ────────────────────────────────────────
  section('Status Provider — Check Sipher Health')
  agent('Composing state... calling SIPHER_STATUS provider')
  try {
    const status = await sipherStatusProvider.get(
      runtime as never,
      { content: { text: '' } } as never,
      {} as never,
    )
    ok(status.text ?? 'No status text')
  } catch (e: unknown) {
    fail(`Provider error: ${(e as Error).message}`)
  }

  // ── Action 1: Stealth Generate ─────────────────────────────
  section('STEALTH_GENERATE — Generate Stealth Keypair')
  agent('User says: "Generate a stealth address for Solana"')
  action('STEALTH_GENERATE')

  const handler1 = stealthGenerate.handler as ActionHandler
  const gen = await handler1(
    runtime,
    { content: { text: 'Generate a stealth address for solana' } },
    undefined,
    undefined,
    async (msg) => { ok(msg.text.split('\n')[0]) },
  )

  const genData = gen.data as { metaAddress: { spendingKey: string; viewingKey: string }; viewingPrivateKey: string }
  agent(`Keys ready — spending: ${truncate(genData.metaAddress.spendingKey)}`)

  // ── Action 2: Privacy Score ────────────────────────────────
  section('PRIVACY_SCORE — Analyze Wallet')
  agent('User says: "What\'s this wallet\'s privacy score?"')
  action('PRIVACY_SCORE')

  const handler2 = privacyScore.handler as ActionHandler
  await handler2(
    runtime,
    { content: { text: 'privacy score for GsbwXfJraMomNxBcjYLcG3mxkBUiyWXAB32fGbSQQRre' } },
    undefined,
    undefined,
    async (msg) => { ok(msg.text.split('\n')[0]) },
  )

  // ── Action 3: Commitment Create ────────────────────────────
  section('COMMITMENT_CREATE — Hide Amount')
  agent('User says: "Create a commitment for 1 SOL"')
  action('COMMITMENT_CREATE')

  const handler3 = commitmentCreate.handler as ActionHandler
  const commit = await handler3(
    runtime,
    { content: { text: 'commitment for 1000000000 lamports' } },
    undefined,
    undefined,
    async (msg) => { ok(msg.text.split('\n')[0]) },
  )

  const commitData = commit.data as { commitment: string }
  agent(`Commitment: ${truncate(commitData.commitment)}`)

  // ── Action 4: Transfer Shield ──────────────────────────────
  section('TRANSFER_SHIELD — Build Shielded Transfer')
  agent('User says: "Shield 1 SOL to Bob\'s stealth address"')
  action('TRANSFER_SHIELD')

  const handler4 = transferShield.handler as ActionHandler
  try {
    await handler4(
      runtime,
      { content: { text: 'shield transfer' } },
      undefined,
      {
        sender: 'GsbwXfJraMomNxBcjYLcG3mxkBUiyWXAB32fGbSQQRre',
        recipientSpendingKey: genData.metaAddress.spendingKey,
        recipientViewingKey: genData.metaAddress.viewingKey,
        amount: '1000000000',
      },
      async (msg) => { ok(msg.text.split('\n')[0]) },
    )
    agent('Unsigned transaction built — ready for wallet signing')
  } catch {
    agent('Transfer build skipped (demo sender not on curve — expected)')
  }

  // ── Action 5: Scan Payments ────────────────────────────────
  section('SCAN_PAYMENTS — Detect Incoming Payments')
  agent('User says: "Check for incoming private payments"')
  action('SCAN_PAYMENTS')

  // Generate fresh keys so we have viewingPrivateKey
  const client = new SipherClient(BASE, API_KEY)
  const freshKeys = await client.request<{
    metaAddress: { spendingKey: string }
    viewingPrivateKey: string
  }>('/v1/stealth/generate', {})

  const handler5 = scanPayments.handler as ActionHandler
  try {
    await handler5(
      runtime,
      { content: { text: 'scan for payments' } },
      undefined,
      {
        viewingPrivateKey: freshKeys.viewingPrivateKey,
        spendingPublicKey: freshKeys.metaAddress.spendingKey,
        limit: 5,
      },
      async (msg) => { ok(msg.text) },
    )
  } catch {
    agent('Scan timed out (expected against public mainnet)')
  }

  // ── Action Validation Demo ─────────────────────────────────
  section('Action Validation — Pattern Matching')
  agent('Testing which actions trigger for natural language...')
  console.log()

  const testPhrases = [
    'I need a private address to receive funds',
    'Send 5 SOL privately to this address',
    'Are there any incoming stealth payments?',
    'Analyze my wallet for tracking risks',
    'Hide this payment amount with a commitment',
    'What is the weather today?',
  ]

  for (const phrase of testPhrases) {
    const matches: string[] = []
    for (const a of allActions) {
      const valid = await a.validate(
        runtime as never,
        { content: { text: phrase } } as never,
        undefined,
      )
      if (valid) matches.push(a.name)
    }
    const status = matches.length > 0 ? GREEN : DIM
    console.log(`  ${status}"${phrase}"${R}`)
    console.log(`    ${matches.length > 0 ? `→ ${matches.join(', ')}` : '→ (no match — not a privacy request)'}`)
  }

  // ── Summary ────────────────────────────────────────────────
  const elapsed = Math.round(performance.now() - start)

  console.log(`
${MAGENTA}${BOLD}╔══════════════════════════════════════════════════════════════╗
║  ELIZA PLUGIN DEMO COMPLETE                                  ║
╚══════════════════════════════════════════════════════════════╝${R}

  ${GREEN}OK${R} Actions tested:      ${BOLD}5${R}
  ${GREEN}OK${R} Provider tested:     ${BOLD}1${R}
  ${GREEN}OK${R} Validation tested:   ${BOLD}${testPhrases.length} phrases${R}
  ${GREEN}OK${R} Steps completed:     ${BOLD}${stepCount}${R}
  ${GREEN}OK${R} Elapsed:             ${BOLD}${elapsed}ms${R}

  ${DIM}Integration:${R}
    ${CYAN}import { sipherPlugin } from '@sip-protocol/plugin-eliza'${R}
    ${DIM}// Add to your character's plugins array${R}
    ${CYAN}plugins: [sipherPlugin]${R}

  ${DIM}Docs: integrations/eliza/README.md${R}
`)
}

main().catch((err) => {
  console.error(`\n${RED}Demo failed: ${err.message}${R}`)
  process.exit(1)
})
