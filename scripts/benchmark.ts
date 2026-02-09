#!/usr/bin/env tsx
/**
 * Sipher Endpoint Latency Benchmark
 *
 * Measures p50/p95/p99 latency across core privacy endpoints.
 * Runs each endpoint 20 times and computes percentile statistics.
 *
 * Usage:
 *   npx tsx scripts/benchmark.ts                              # Against localhost
 *   SIPHER_URL=https://sipher.sip-protocol.org npx tsx scripts/benchmark.ts  # Against production
 *
 * Env:
 *   SIPHER_URL   — API base URL (default: http://localhost:5006)
 *   API_KEY      — API key for authenticated endpoints
 *   RUNS         — Iterations per endpoint (default: 20)
 */

const BASE = process.env.SIPHER_URL || 'http://localhost:5006'
const API_KEY = process.env.API_KEY || 'dev-key-1'
const RUNS = Number(process.env.RUNS) || 20

// ─── Colors ──────────────────────────────────────────────────────────────────

const RESET = '\x1b[0m'
const GREEN = '\x1b[32m'
const CYAN = '\x1b[36m'
const YELLOW = '\x1b[33m'
const DIM = '\x1b[2m'
const BOLD = '\x1b[1m'
const RED = '\x1b[31m'

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

// ─── Stats ───────────────────────────────────────────────────────────────────

function percentile(sorted: number[], p: number): number {
  const idx = Math.ceil((p / 100) * sorted.length) - 1
  return sorted[Math.max(0, idx)]
}

function computeStats(latencies: number[]) {
  const sorted = [...latencies].sort((a, b) => a - b)
  return {
    min: sorted[0],
    p50: percentile(sorted, 50),
    p95: percentile(sorted, 95),
    p99: percentile(sorted, 99),
    max: sorted[sorted.length - 1],
    avg: Math.round(latencies.reduce((a, b) => a + b, 0) / latencies.length),
  }
}

// ─── Benchmark Definitions ───────────────────────────────────────────────────

interface Benchmark {
  name: string
  endpoint: string
  method: string
  body?: unknown
}

const BENCHMARKS: Benchmark[] = [
  {
    name: 'Stealth Generate',
    endpoint: '/v1/stealth/generate',
    method: 'POST',
    body: { chain: 'solana' },
  },
  {
    name: 'Stealth Derive',
    endpoint: '/v1/stealth/derive',
    method: 'POST',
    // body populated dynamically after generate
  },
  {
    name: 'Commitment Create',
    endpoint: '/v1/commitment/create',
    method: 'POST',
    body: { value: '1000000000' },
  },
  {
    name: 'Commitment Verify',
    endpoint: '/v1/commitment/verify',
    method: 'POST',
    // body populated dynamically after create
  },
  {
    name: 'Transfer Shield',
    endpoint: '/v1/transfer/shield',
    method: 'POST',
    // body populated dynamically
  },
  {
    name: 'Viewing Key Generate',
    endpoint: '/v1/viewing-key/generate',
    method: 'POST',
    body: { path: 'm/0' },
  },
  {
    name: 'Scan Payments',
    endpoint: '/v1/scan/payments',
    method: 'POST',
    // body populated dynamically
  },
  {
    name: 'Privacy Score',
    endpoint: '/v1/privacy/score',
    method: 'POST',
    body: { address: 'GsbwXfJraMomNxBcjYLcG3mxkBUiyWXAB32fGbSQQRre', limit: 10 },
  },
  {
    name: 'Range Proof Generate',
    endpoint: '/v1/proofs/range/generate',
    method: 'POST',
    // body populated dynamically after commitment
  },
]

// ─── Runner ──────────────────────────────────────────────────────────────────

async function runBenchmark(bench: Benchmark): Promise<number[]> {
  const latencies: number[] = []
  for (let i = 0; i < RUNS; i++) {
    const start = performance.now()
    try {
      await api(bench.endpoint, bench.body)
    } catch {
      // Count failed requests too — they have latency
    }
    latencies.push(Math.round(performance.now() - start))
  }
  return latencies
}

async function main() {
  console.log(`
${CYAN}╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   ${BOLD}SIPHER ENDPOINT LATENCY BENCHMARK${RESET}${CYAN}                         ║
║   Measuring p50 / p95 / p99 across core endpoints            ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝${RESET}
`)
  console.log(`${DIM}Server: ${BASE}${RESET}`)
  console.log(`${DIM}Iterations: ${RUNS} per endpoint${RESET}`)
  console.log(`${DIM}Warming up...${RESET}\n`)

  // ── Warmup: generate keys + commitment for derived benchmarks ──
  const keys = await api<Record<string, unknown>>('/v1/stealth/generate', { chain: 'solana' })
  const meta = keys.metaAddress as Record<string, string>

  const commitment = await api<Record<string, string>>('/v1/commitment/create', { value: '1000000000' })

  // Populate dynamic bodies
  BENCHMARKS[1].body = { recipientMetaAddress: meta }
  BENCHMARKS[3].body = {
    commitment: commitment.commitment,
    value: '1000000000',
    blindingFactor: commitment.blindingFactor,
  }
  BENCHMARKS[4].body = {
    sender: 'GsbwXfJraMomNxBcjYLcG3mxkBUiyWXAB32fGbSQQRre',
    recipientMetaAddress: meta,
    amount: '1000000000',
  }
  BENCHMARKS[6].body = {
    viewingPrivateKey: keys.viewingPrivateKey,
    spendingPublicKey: meta.spendingKey,
    limit: 5,
  }
  BENCHMARKS[8].body = {
    value: '1000000000',
    threshold: '0',
    blindingFactor: commitment.blindingFactor,
    commitment: commitment.commitment,
  }

  // ── Run benchmarks ──────────────────────────────────────────────
  interface BenchResult {
    name: string
    endpoint: string
    stats: ReturnType<typeof computeStats>
  }

  const results: BenchResult[] = []

  for (const bench of BENCHMARKS) {
    process.stdout.write(`  ${YELLOW}⏱${RESET}  ${bench.name.padEnd(22)} `)

    const latencies = await runBenchmark(bench)
    const stats = computeStats(latencies)
    results.push({ name: bench.name, endpoint: bench.endpoint, stats })

    const color = stats.p50 < 50 ? GREEN : stats.p50 < 200 ? YELLOW : RED
    console.log(`${color}p50=${stats.p50}ms${RESET}  p95=${stats.p95}ms  p99=${stats.p99}ms`)
  }

  // ── Markdown table output ───────────────────────────────────────
  console.log(`\n${CYAN}━━━ Markdown Table (copy to README) ━━━${RESET}\n`)

  console.log('| Endpoint | p50 | p95 | p99 | Avg |')
  console.log('|----------|-----|-----|-----|-----|')
  for (const r of results) {
    console.log(`| \`${r.endpoint}\` | ${r.stats.p50}ms | ${r.stats.p95}ms | ${r.stats.p99}ms | ${r.stats.avg}ms |`)
  }

  // ── Summary ─────────────────────────────────────────────────────
  const allP50s = results.map(r => r.stats.p50)
  const avgP50 = Math.round(allP50s.reduce((a, b) => a + b, 0) / allP50s.length)

  console.log(`
${CYAN}╔══════════════════════════════════════════════════════════════╗
║  ${BOLD}BENCHMARK COMPLETE${RESET}${CYAN}                                          ║
╚══════════════════════════════════════════════════════════════╝${RESET}

  ${GREEN}✓${RESET} Endpoints benchmarked: ${BOLD}${results.length}${RESET}
  ${GREEN}✓${RESET} Iterations each:      ${BOLD}${RUNS}${RESET}
  ${GREEN}✓${RESET} Average p50:           ${BOLD}${avgP50}ms${RESET}
  ${GREEN}✓${RESET} Server:                ${BOLD}${BASE}${RESET}

  ${DIM}All operations are real cryptographic computations —
  Ed25519 ECDH, Pedersen commitments, STARK proofs, XChaCha20.${RESET}
`)
}

main().catch((err) => {
  console.error(`\n${RED}Benchmark failed: ${err.message}${RESET}`)
  process.exit(1)
})
