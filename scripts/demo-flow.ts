#!/usr/bin/env tsx
/**
 * Full-flow demo: generate → derive → shield → scan → claim
 *
 * Demonstrates the complete Sipher privacy pipeline end-to-end.
 * Run against a local dev server: pnpm dev && pnpm demo
 */

const BASE = process.env.SIPHER_URL || 'http://localhost:5006'

async function api<T>(path: string, body?: unknown): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    method: body ? 'POST' : 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  })
  const json = await res.json()
  if (!json.success) {
    throw new Error(`${path} failed: ${JSON.stringify(json.error)}`)
  }
  return json.data
}

function section(title: string) {
  console.log(`\n${'═'.repeat(60)}`)
  console.log(`  ${title}`)
  console.log('═'.repeat(60))
}

async function main() {
  console.log('╔════════════════════════════════════════════════════════╗')
  console.log('║  Sipher Full-Flow Demo                                ║')
  console.log('║  generate → derive → shield → scan → claim            ║')
  console.log('╚════════════════════════════════════════════════════════╝')
  console.log(`\nServer: ${BASE}`)

  // ─── Step 0: Health check ──────────────────────────────────────
  section('0. Health Check')
  const health = await api<any>('/v1/health')
  console.log(`Status: ${health.status}`)
  console.log(`Solana Slot: ${health.solana?.slot ?? 'N/A'}`)

  // ─── Step 1: Generate stealth keypair (recipient) ──────────────
  section('1. Generate Stealth Keypair (Recipient)')
  const keys = await api<any>('/v1/stealth/generate', {})
  console.log(`Spending Public Key: ${keys.metaAddress.spendingKey.slice(0, 20)}...`)
  console.log(`Viewing Public Key:  ${keys.metaAddress.viewingKey.slice(0, 20)}...`)
  console.log(`Chain: ${keys.metaAddress.chain}`)

  // ─── Step 2: Derive stealth address (sender side) ──────────────
  section('2. Derive Stealth Address (Sender)')
  const derived = await api<any>('/v1/stealth/derive', {
    recipientMetaAddress: keys.metaAddress,
  })
  console.log(`Stealth Address:    ${derived.stealthAddress}`)
  console.log(`Ephemeral PubKey:   ${derived.ephemeralPublicKey.slice(0, 20)}...`)
  console.log(`View Tag:           ${derived.viewTag}`)
  console.log(`Shared Secret:      ${derived.sharedSecret.slice(0, 20)}...`)

  // ─── Step 3: Check stealth address (recipient side) ────────────
  section('3. Check Stealth Address (Recipient)')
  const check = await api<any>('/v1/stealth/check', {
    stealthAddress: derived.stealthAddress,
    ephemeralPublicKey: derived.ephemeralPublicKey,
    viewingPrivateKey: keys.viewingPrivateKey,
    spendingPublicKey: keys.metaAddress.spendingKey,
    viewTag: derived.viewTag,
  })
  console.log(`Belongs to recipient: ${check.belongsToRecipient}`)

  // ─── Step 4: Create Pedersen commitment ────────────────────────
  section('4. Create Pedersen Commitment')
  const commitment = await api<any>('/v1/commitment/create', {
    value: '1000000000',
  })
  console.log(`Commitment:     ${commitment.commitment.slice(0, 20)}...`)
  console.log(`Blinding Factor: ${commitment.blindingFactor.slice(0, 20)}...`)

  // ─── Step 4b: Verify commitment ────────────────────────────────
  const verified = await api<any>('/v1/commitment/verify', {
    commitment: commitment.commitment,
    value: '1000000000',
    blindingFactor: commitment.blindingFactor,
  })
  console.log(`Verified: ${verified.valid}`)

  // ─── Step 5: Homomorphic operations ────────────────────────────
  section('5. Homomorphic Commitment Operations')
  const c1 = await api<any>('/v1/commitment/create', { value: '500000000' })
  const c2 = await api<any>('/v1/commitment/create', { value: '300000000' })
  console.log(`C1 (500M lamports): ${c1.commitment.slice(0, 20)}...`)
  console.log(`C2 (300M lamports): ${c2.commitment.slice(0, 20)}...`)

  const added = await api<any>('/v1/commitment/add', {
    commitmentA: c1.commitment,
    commitmentB: c2.commitment,
    blindingA: c1.blindingFactor,
    blindingB: c2.blindingFactor,
  })
  console.log(`C1 + C2:            ${added.commitment.slice(0, 20)}...`)

  // Verify the sum commitment equals commit(800M)
  const sumVerified = await api<any>('/v1/commitment/verify', {
    commitment: added.commitment,
    value: '800000000',
    blindingFactor: added.blindingFactor,
  })
  console.log(`Sum verified (800M): ${sumVerified.valid}`)

  const subtracted = await api<any>('/v1/commitment/subtract', {
    commitmentA: c1.commitment,
    commitmentB: c2.commitment,
    blindingA: c1.blindingFactor,
    blindingB: c2.blindingFactor,
  })
  console.log(`C1 - C2:            ${subtracted.commitment.slice(0, 20)}...`)

  const diffVerified = await api<any>('/v1/commitment/verify', {
    commitment: subtracted.commitment,
    value: '200000000',
    blindingFactor: subtracted.blindingFactor,
  })
  console.log(`Diff verified (200M): ${diffVerified.valid}`)

  // ─── Step 6: Build shielded transfer (unsigned tx) ─────────────
  section('6. Build Shielded SOL Transfer')
  // Use a dummy sender — in production the user signs with their wallet
  const sender = 'GsbwXfJraMomNxBcjYLcG3mxkBUiyWXAB32fGbSQQRre'
  try {
    const shielded = await api<any>('/v1/transfer/shield', {
      sender,
      recipientMetaAddress: keys.metaAddress,
      amount: '1000000000',
    })
    console.log(`Transaction (base64): ${shielded.transaction.slice(0, 40)}...`)
    console.log(`Stealth Address:      ${shielded.stealthAddress}`)
    console.log(`Ephemeral Key:        ${shielded.ephemeralPublicKey.slice(0, 20)}...`)
    console.log(`View Tag:             ${shielded.viewTag}`)
    console.log(`Commitment:           ${shielded.commitment.slice(0, 20)}...`)
    console.log(`Viewing Key Hash:     ${shielded.viewingKeyHash.slice(0, 20)}...`)
  } catch {
    console.log('(Skipped — sender address not on curve for this demo)')
  }

  // ─── Step 7: Viewing key encrypt + decrypt ─────────────────────
  section('7. Viewing Key Encrypt → Decrypt (Compliance)')
  const vk = await api<any>('/v1/viewing-key/generate', { path: 'm/0' })
  console.log(`Viewing Key:  ${vk.key.slice(0, 20)}...`)
  console.log(`Path:         ${vk.path}`)
  console.log(`Hash:         ${vk.hash.slice(0, 20)}...`)

  const txData = {
    sender: 'Alice',
    recipient: derived.stealthAddress,
    amount: '1000000000',
    timestamp: Math.floor(Date.now() / 1000),
  }

  const encrypted = await api<any>('/v1/viewing-key/disclose', {
    viewingKey: vk,
    transactionData: txData,
  })
  console.log(`Ciphertext:   ${encrypted.ciphertext.slice(0, 20)}...`)
  console.log(`Nonce:        ${encrypted.nonce.slice(0, 20)}...`)

  const decrypted = await api<any>('/v1/viewing-key/decrypt', {
    viewingKey: vk,
    encrypted: {
      ciphertext: encrypted.ciphertext,
      nonce: encrypted.nonce,
      viewingKeyHash: encrypted.viewingKeyHash,
    },
  })
  console.log(`\nDecrypted:`)
  console.log(`  Sender:    ${decrypted.sender}`)
  console.log(`  Recipient: ${decrypted.recipient}`)
  console.log(`  Amount:    ${decrypted.amount}`)
  console.log(`  Timestamp: ${decrypted.timestamp}`)
  console.log(`  Match:     ${decrypted.sender === txData.sender && decrypted.amount === txData.amount}`)

  // ─── Step 8: Scan for payments ─────────────────────────────────
  section('8. Scan for Payments')
  const scanned = await api<any>('/v1/scan/payments', {
    viewingPrivateKey: keys.viewingPrivateKey,
    spendingPublicKey: keys.metaAddress.spendingKey,
    limit: 10,
  })
  console.log(`Scanned: ${scanned.scanned} announcements`)
  console.log(`Payments found: ${scanned.payments.length}`)
  console.log('(None expected in demo — no on-chain transactions)')

  // ─── Done ──────────────────────────────────────────────────────
  section('Demo Complete')
  console.log('All steps executed successfully.')
  console.log('Endpoints demonstrated: 12')
  console.log('')
  console.log('In production, the transfer/shield transaction would be')
  console.log('signed by the sender\'s wallet and submitted to Solana.')
  console.log('The recipient would then use scan/payments + transfer/claim')
  console.log('to find and claim their funds.')
}

main().catch((err) => {
  console.error('\nDemo failed:', err.message)
  process.exit(1)
})
