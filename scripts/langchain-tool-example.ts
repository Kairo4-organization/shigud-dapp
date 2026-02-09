#!/usr/bin/env tsx
/**
 * Sipher × LangChain Tool Integration Example
 *
 * Demonstrates how to wrap Sipher endpoints as LangChain-compatible tools.
 * This is a standalone example — no langchain dependency required to run.
 *
 * To use with real LangChain:
 *   import { StructuredTool } from '@langchain/core/tools'
 *   import { z } from 'zod'
 *   // Replace SipherTool base class with StructuredTool
 *
 * Usage:
 *   npx tsx scripts/langchain-tool-example.ts
 *   SIPHER_URL=https://sipher.sip-protocol.org npx tsx scripts/langchain-tool-example.ts
 *
 * Env:
 *   SIPHER_URL   — API base URL (default: http://localhost:5006)
 *   API_KEY      — API key for authenticated endpoints
 */

const BASE = process.env.SIPHER_URL || 'http://localhost:5006'
const API_KEY = process.env.API_KEY || 'dev-key-1'

// ─── Colors ──────────────────────────────────────────────────────────────────

const RESET = '\x1b[0m'
const GREEN = '\x1b[32m'
const CYAN = '\x1b[36m'
const YELLOW = '\x1b[33m'
const MAGENTA = '\x1b[35m'
const DIM = '\x1b[2m'
const BOLD = '\x1b[1m'

// ─── API Client ──────────────────────────────────────────────────────────────

interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: { code: string; message: string }
}

async function api<T>(path: string, body?: unknown): Promise<T> {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (API_KEY) headers['X-API-Key'] = API_KEY

  const res = await fetch(`${BASE}${path}`, {
    method: body !== undefined ? 'POST' : 'GET',
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const json = (await res.json()) as ApiResponse<T>
  if (!json.success) {
    throw new Error(`${path} failed: ${json.error?.message || 'Unknown error'} (${json.error?.code})`)
  }
  return json.data!
}

// ─── LangChain-Compatible Tool Interface ─────────────────────────────────────
//
// This mirrors LangChain's StructuredTool interface:
//   https://js.langchain.com/docs/modules/agents/tools/
//
// In production, replace `SipherTool` with:
//   import { StructuredTool } from '@langchain/core/tools'
//   class MyTool extends StructuredTool { ... }

interface ToolSchema {
  type: 'object'
  properties: Record<string, { type: string; description: string; enum?: string[] }>
  required: string[]
}

abstract class SipherTool {
  abstract name: string
  abstract description: string
  abstract schema: ToolSchema

  abstract _call(input: Record<string, unknown>): Promise<string>

  async invoke(input: Record<string, unknown>): Promise<string> {
    return this._call(input)
  }
}

// ─── Tool Definitions ────────────────────────────────────────────────────────

class StealthGenerateTool extends SipherTool {
  name = 'sipher_stealth_generate'
  description = 'Generate a stealth meta-address keypair for receiving private payments. Returns spending and viewing public keys that can be shared with senders. Supports 17 chains.'
  schema: ToolSchema = {
    type: 'object',
    properties: {
      chain: {
        type: 'string',
        description: 'Blockchain to generate keys for',
        enum: ['solana', 'ethereum', 'polygon', 'arbitrum', 'near', 'cosmos', 'bitcoin'],
      },
    },
    required: [],
  }

  async _call(input: Record<string, unknown>): Promise<string> {
    const result = await api<Record<string, unknown>>('/v1/stealth/generate', {
      chain: input.chain || 'solana',
    })
    const meta = result.metaAddress as Record<string, string>
    return JSON.stringify({
      spendingKey: meta.spendingKey,
      viewingKey: meta.viewingKey,
      chain: meta.chain,
    })
  }
}

class TransferShieldTool extends SipherTool {
  name = 'sipher_transfer_shield'
  description = 'Build an unsigned shielded transfer transaction. The sender address sends funds to a one-time stealth address derived from the recipient meta-address. Returns an unsigned transaction to sign with your wallet.'
  schema: ToolSchema = {
    type: 'object',
    properties: {
      sender: { type: 'string', description: 'Sender wallet address (base58 for Solana)' },
      recipientSpendingKey: { type: 'string', description: 'Recipient spending public key from stealth/generate' },
      recipientViewingKey: { type: 'string', description: 'Recipient viewing public key from stealth/generate' },
      amount: { type: 'string', description: 'Amount in lamports (e.g. "1000000000" for 1 SOL)' },
      chain: { type: 'string', description: 'Blockchain (default: solana)' },
    },
    required: ['sender', 'recipientSpendingKey', 'recipientViewingKey', 'amount'],
  }

  async _call(input: Record<string, unknown>): Promise<string> {
    const result = await api<Record<string, unknown>>('/v1/transfer/shield', {
      sender: input.sender,
      recipientMetaAddress: {
        spendingKey: input.recipientSpendingKey,
        viewingKey: input.recipientViewingKey,
        chain: input.chain || 'solana',
      },
      amount: input.amount,
    })
    return JSON.stringify({
      transaction: (result.transaction as string).slice(0, 40) + '...',
      stealthAddress: result.stealthAddress,
      commitment: result.commitment,
    })
  }
}

class ScanPaymentsTool extends SipherTool {
  name = 'sipher_scan_payments'
  description = 'Scan the blockchain for incoming stealth payments addressed to you. Uses your viewing private key to detect payments without revealing your identity on-chain.'
  schema: ToolSchema = {
    type: 'object',
    properties: {
      viewingPrivateKey: { type: 'string', description: 'Your viewing private key (from stealth/generate)' },
      spendingPublicKey: { type: 'string', description: 'Your spending public key (from stealth/generate)' },
      limit: { type: 'string', description: 'Max announcements to scan (default: 10)' },
    },
    required: ['viewingPrivateKey', 'spendingPublicKey'],
  }

  async _call(input: Record<string, unknown>): Promise<string> {
    const result = await api<Record<string, unknown>>('/v1/scan/payments', {
      viewingPrivateKey: input.viewingPrivateKey,
      spendingPublicKey: input.spendingPublicKey,
      limit: Number(input.limit) || 10,
    })
    return JSON.stringify({
      scanned: result.scanned,
      paymentsFound: (result.payments as unknown[]).length,
    })
  }
}

class PrivacyScoreTool extends SipherTool {
  name = 'sipher_privacy_score'
  description = 'Analyze a wallet address for privacy vulnerabilities. Returns a 0-100 score with factor breakdown and recommendations for improving transaction privacy.'
  schema: ToolSchema = {
    type: 'object',
    properties: {
      address: { type: 'string', description: 'Wallet address to analyze' },
    },
    required: ['address'],
  }

  async _call(input: Record<string, unknown>): Promise<string> {
    const result = await api<Record<string, unknown>>('/v1/privacy/score', {
      address: input.address,
      limit: 10,
    })
    return JSON.stringify({
      score: result.score,
      grade: result.grade,
      recommendations: result.recommendations,
    })
  }
}

class CommitmentCreateTool extends SipherTool {
  name = 'sipher_commitment_create'
  description = 'Create a Pedersen commitment to hide a transaction amount. The commitment can be verified later without revealing the value. Supports homomorphic addition and subtraction.'
  schema: ToolSchema = {
    type: 'object',
    properties: {
      value: { type: 'string', description: 'Value to commit to (e.g. "1000000000" for 1 SOL in lamports)' },
    },
    required: ['value'],
  }

  async _call(input: Record<string, unknown>): Promise<string> {
    const result = await api<Record<string, string>>('/v1/commitment/create', {
      value: input.value,
    })
    return JSON.stringify({
      commitment: result.commitment,
      blindingFactor: result.blindingFactor,
    })
  }
}

// ─── Tool Registry ───────────────────────────────────────────────────────────

const TOOL_REGISTRY: SipherTool[] = [
  new StealthGenerateTool(),
  new TransferShieldTool(),
  new ScanPaymentsTool(),
  new PrivacyScoreTool(),
  new CommitmentCreateTool(),
]

function findTool(name: string): SipherTool | undefined {
  return TOOL_REGISTRY.find(t => t.name === name)
}

// ─── Simulated Agent Loop ────────────────────────────────────────────────────

let stepCount = 0

function banner() {
  console.log(`
${MAGENTA}╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ${BOLD}SIPHER × LANGCHAIN TOOL INTEGRATION${RESET}${MAGENTA}                       ║
║   Privacy tools for autonomous agents                        ║
║                                                              ║
║   Demonstrates: tool discovery → selection → execution       ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝${RESET}
`)
  console.log(`${DIM}Server: ${BASE}${RESET}\n`)
}

function section(title: string) {
  stepCount++
  console.log(`\n${CYAN}━━━ Step ${stepCount}: ${title} ━━━${RESET}`)
}

function agent(msg: string) {
  console.log(`  ${MAGENTA}🤖 Agent:${RESET} ${msg}`)
}

function tool(name: string, input: Record<string, unknown>) {
  console.log(`  ${YELLOW}⚡ Tool:${RESET} ${name}(${JSON.stringify(input)})`)
}

function result(data: string) {
  const parsed = JSON.parse(data)
  console.log(`  ${GREEN}✓ Result:${RESET} ${JSON.stringify(parsed, null, 2).split('\n').join('\n             ')}`)
}

function truncate(s: string, len = 24): string {
  return s.length > len ? `${s.slice(0, len)}...` : s
}

async function main() {
  banner()
  const start = performance.now()

  // ── Phase 1: Tool Discovery ────────────────────────────────────
  section('Tool Discovery')
  agent('Scanning available Sipher tools...')
  console.log()
  for (const t of TOOL_REGISTRY) {
    console.log(`  ${CYAN}📦 ${t.name}${RESET}`)
    console.log(`     ${DIM}${t.description.slice(0, 80)}...${RESET}`)
    console.log(`     ${DIM}Params: ${t.schema.required.join(', ') || '(none required)'}${RESET}`)
  }
  agent(`Found ${TOOL_REGISTRY.length} privacy tools`)

  // ── Phase 2: Agent Reasoning — "I need a stealth address" ─────
  section('Agent Reasoning — Generate Stealth Address')
  agent('Task: receive a private payment. I need a stealth meta-address.')
  agent('Selecting tool: sipher_stealth_generate (chain: solana)')

  const generateTool = findTool('sipher_stealth_generate')!
  const generateInput = { chain: 'solana' }
  tool(generateTool.name, generateInput)
  const generateResult = await generateTool.invoke(generateInput)
  result(generateResult)

  const keys = JSON.parse(generateResult)
  agent(`Got meta-address. Spending key: ${truncate(keys.spendingKey)}`)

  // ── Phase 3: Multi-chain — same tool, different chain ──────────
  section('Multi-Chain — Ethereum Stealth Address')
  agent('I also need an Ethereum stealth address for cross-chain ops.')

  const ethInput = { chain: 'ethereum' }
  tool(generateTool.name, ethInput)
  const ethResult = await generateTool.invoke(ethInput)
  result(ethResult)

  const ethKeys = JSON.parse(ethResult)
  agent(`Ethereum meta-address ready. Key: ${truncate(ethKeys.spendingKey)}`)

  // ── Phase 4: Privacy Analysis ──────────────────────────────────
  section('Agent Reasoning — Check Privacy Score')
  agent('Before transacting, let me check my wallet privacy score.')

  const scoreTool = findTool('sipher_privacy_score')!
  const scoreInput = { address: 'GsbwXfJraMomNxBcjYLcG3mxkBUiyWXAB32fGbSQQRre' }
  tool(scoreTool.name, scoreInput)
  const scoreResult = await scoreTool.invoke(scoreInput)
  result(scoreResult)

  const scoreData = JSON.parse(scoreResult)
  agent(`Privacy score: ${scoreData.score}/100 (${scoreData.grade}). Recommendations noted.`)

  // ── Phase 5: Create Hidden Amount ──────────────────────────────
  section('Agent Reasoning — Hide Transaction Amount')
  agent('I need to hide the payment amount with a Pedersen commitment.')

  const commitTool = findTool('sipher_commitment_create')!
  const commitInput = { value: '1000000000' }
  tool(commitTool.name, commitInput)
  const commitResult = await commitTool.invoke(commitInput)
  result(commitResult)

  const commitData = JSON.parse(commitResult)
  agent(`Amount hidden. Commitment: ${truncate(commitData.commitment)}`)

  // ── Phase 6: Build Shielded Transfer ───────────────────────────
  section('Agent Reasoning — Build Shielded Transfer')
  agent('Now building the shielded transfer to Bob\'s stealth address.')

  const shieldTool = findTool('sipher_transfer_shield')!
  const shieldInput = {
    sender: 'GsbwXfJraMomNxBcjYLcG3mxkBUiyWXAB32fGbSQQRre',
    recipientSpendingKey: keys.spendingKey,
    recipientViewingKey: keys.viewingKey,
    amount: '1000000000',
  }
  tool(shieldTool.name, shieldInput)
  try {
    const shieldResult = await shieldTool.invoke(shieldInput)
    result(shieldResult)
    agent('Unsigned transaction ready — sign with wallet and submit to Solana.')
  } catch {
    agent('Transfer build skipped (demo sender not on curve — expected in mock mode)')
  }

  // ── Phase 7: Scan for Payments ─────────────────────────────────
  section('Agent Reasoning — Scan for Incoming Payments')
  agent('Checking if anyone has sent me private payments...')

  const scanTool = findTool('sipher_scan_payments')!
  // We need the private keys from the original generate call
  const fullKeys = await api<Record<string, unknown>>('/v1/stealth/generate', {})
  const meta = fullKeys.metaAddress as Record<string, string>
  const scanInput = {
    viewingPrivateKey: fullKeys.viewingPrivateKey as string,
    spendingPublicKey: meta.spendingKey,
    limit: '5',
  }
  tool(scanTool.name, { viewingPrivateKey: truncate(scanInput.viewingPrivateKey), spendingPublicKey: truncate(scanInput.spendingPublicKey), limit: '5' })
  try {
    const scanResult = await scanTool.invoke(scanInput)
    result(scanResult)
    agent('Scan complete. Monitoring for stealth payments.')
  } catch {
    agent('Scan timed out (expected against public mainnet — no on-chain data)')
  }

  // ── Phase 8: LangChain Integration Code ────────────────────────
  section('Real LangChain Integration')
  agent('Here\'s how to use these tools with real LangChain:')
  console.log(`
  ${DIM}// Install: npm install @langchain/core @langchain/openai
  //
  // import { StructuredTool } from '@langchain/core/tools'
  // import { ChatOpenAI } from '@langchain/openai'
  // import { AgentExecutor, createStructuredChatAgent } from 'langchain/agents'
  // import { z } from 'zod'
  //
  // class SipherStealthGenerate extends StructuredTool {
  //   name = 'sipher_stealth_generate'
  //   description = 'Generate a stealth meta-address for private payments'
  //   schema = z.object({ chain: z.string().optional() })
  //
  //   async _call({ chain }: { chain?: string }) {
  //     const res = await fetch('https://sipher.sip-protocol.org/v1/stealth/generate', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json', 'X-API-Key': process.env.SIPHER_KEY! },
  //       body: JSON.stringify({ chain: chain || 'solana' }),
  //     })
  //     return JSON.stringify((await res.json()).data.metaAddress)
  //   }
  // }
  //
  // const tools = [new SipherStealthGenerate(), /* ...more tools */]
  // const llm = new ChatOpenAI({ model: 'gpt-4' })
  // const agent = await createStructuredChatAgent({ llm, tools, prompt })
  // const executor = new AgentExecutor({ agent, tools })
  //
  // await executor.invoke({ input: 'Generate a stealth address for Solana' })${RESET}
`)

  // ── Summary ────────────────────────────────────────────────────
  const elapsed = Math.round(performance.now() - start)
  console.log(`${MAGENTA}╔══════════════════════════════════════════════════════════════╗
║  ${BOLD}INTEGRATION DEMO COMPLETE${RESET}${MAGENTA}                                      ║
╚══════════════════════════════════════════════════════════════╝${RESET}

  ${GREEN}✓${RESET} Tools registered:     ${BOLD}${TOOL_REGISTRY.length}${RESET}
  ${GREEN}✓${RESET} Steps completed:      ${BOLD}${stepCount}${RESET}
  ${GREEN}✓${RESET} Elapsed:              ${BOLD}${elapsed}ms${RESET}

  ${DIM}Tools demonstrated:${RESET}
    • sipher_stealth_generate    — Multi-chain stealth addresses
    • sipher_transfer_shield     — Shielded transfer building
    • sipher_scan_payments       — Payment detection
    • sipher_privacy_score       — Wallet privacy analysis
    • sipher_commitment_create   — Pedersen commitments

  ${DIM}Framework compatibility:${RESET}
    • LangChain (StructuredTool)
    • CrewAI (@tool decorator)
    • AutoGPT (command pattern)
    • OpenClaw (skill.md)
    • Any framework with tool/function calling
`)
}

main().catch((err) => {
  console.error(`\n\x1b[31mDemo failed: ${err.message}${RESET}`)
  process.exit(1)
})
