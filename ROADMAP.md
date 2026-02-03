# Sipher Roadmap — Privacy-as-a-Skill for Autonomous Agents

## Endgame Vision

Sipher becomes the **universal privacy middleware API** — the single REST endpoint any agent, app, or service calls to add privacy to blockchain transactions. "Stripe for privacy" — dead-simple API, all complexity internal.

**Principles:** Agent-first | Chain-agnostic | Backend-agnostic | Compliance-ready | Zero custody

**Revenue path:** Tiered API keys (free/pro/enterprise) with metered billing per privacy operation.

**Moat:** Depth of SDK (6,661+ tests), backend aggregation (6+ privacy backends), agent-native design.

---

## Phase 1: Hackathon Polish (Feb 5-12)

> Fill critical gaps, make the demo bulletproof for Colosseum judges.

| ID | Title | Size |
|----|-------|------|
| S1-01 | Add transfer/shield endpoint tests | S |
| S1-02 | Add transfer/claim endpoint tests | M |
| S1-03 | Add scan/payments endpoint tests | S |
| S1-04 | Create full-flow demo script (generate → derive → shield → scan → claim) | S |
| S1-05 | Add commitment homomorphic operations (add, subtract) | S |
| S1-06 | Add viewing key decrypt endpoint | S |
| S1-07 | Create progress update forum posts daily until Feb 12 | S |

**Outcome:** 39 → 65+ tests, 13 → 16 endpoints, full-flow demo script in repo.

---

## Phase 2: Production Hardening (Feb-Mar 2026)

> Make Sipher reliable enough that agents depend on it in production.

| ID | Title | Size |
|----|-------|------|
| S2-01 | Add OpenAPI/Swagger spec served at /docs | M |
| S2-02 | Implement API key management with usage tiers (free/pro/enterprise) | L |
| S2-03 | Add Redis for rate limiting, idempotency, and session state | L |
| S2-04 | Add idempotency key support for all mutation endpoints | M |
| S2-05 | Add comprehensive error codes enum and error catalog at GET /errors | S |
| S2-06 | Add request audit logging (sanitized payloads to structured logs) | M |
| S2-07 | Extend health check to cover all subsystems (RPC latency, Redis, cert expiry) | S |

**Outcome:** Production-grade reliability, proper auth tiers, machine-readable error catalog.

---

## Phase 3: Advanced Privacy Features (Mar-Apr 2026)

> Expose full SDK depth. This is where Sipher becomes irreplaceable.

| ID | Title | Size |
|----|-------|------|
| S3-01 | Add surveillance/privacy scoring endpoint (wallet analysis, 0-100 score) | L |
| S3-02 | Add batch operations (multi-recipient stealth, batch commitments, batch scan) | M |
| S3-03 | Add ZK proof generation/verification endpoints (Noir: funding, validity, fulfillment) | XL |
| S3-04 | Add C-SPL (Confidential SPL Tokens) endpoints (wrap, unwrap, transfer) | L |
| S3-05 | Add viewing key hierarchical derivation (BIP32-style, role-based) | M |
| S3-06 | Add real-time webhook endpoint for push-based payment detection (Helius) | XL |
| S3-07 | Add RPC provider abstraction (Helius, QuickNode, Triton per API key) | M |

**Outcome:** Surveillance scoring (conversion tool), ZK proofs, C-SPL, webhooks — full privacy stack.

---

## Phase 4: Multi-Chain Expansion (Apr-Jun 2026)

> Extend beyond Solana. SDK already supports NEAR, Ethereum, Cosmos, Bitcoin, Move chains.

| ID | Title | Size |
|----|-------|------|
| S4-01 | Add NEAR stealth address and viewing key endpoints | L |
| S4-02 | Add Ethereum/EVM stealth address endpoints (secp256k1) | M |
| S4-03 | Add chain-agnostic unified transfer endpoint (POST /transfer/private) | XL |
| S4-04 | Add Cosmos stealth address endpoints (Osmosis, Injective, Celestia) | M |
| S4-05 | Add Bitcoin Taproot stealth address endpoints (Schnorr-based) | L |
| S4-06 | Add Move chain endpoints (Aptos, Sui) | M |

**Outcome:** 6 chain families supported through unified API.

---

## Phase 5: Privacy Backend Aggregation (Jun-Aug 2026)

> The "OpenRouter for privacy" moment. Single API routing through multiple privacy backends.

| ID | Title | Size |
|----|-------|------|
| S5-01 | Expose PrivacyBackendRegistry via API (list, health, select) | L |
| S5-02 | Add Arcium MPC backend endpoints (compute, status, decrypt) | L |
| S5-03 | Add Inco FHE backend endpoints (encrypt, compute, decrypt) | L |
| S5-04 | Add PrivateSwap composite endpoint (stealth + C-SPL + swap in one call) | XL |
| S5-05 | Add privacy backend comparison endpoint (cost, latency, privacy level) | M |

**Outcome:** 5+ privacy backends routed through unified API.

---

## Phase 6: Enterprise & Ecosystem (Aug-Dec 2026)

> Revenue generation, enterprise adoption, ecosystem growth.

| ID | Title | Size |
|----|-------|------|
| S6-01 | Add compliance/disclosure endpoints (selective disclosure, audit reports) | L |
| S6-02 | Auto-generate typed client SDKs (Python, Rust, Go) from OpenAPI spec | L |
| S6-03 | Add billing and metering middleware (Stripe integration, usage tracking) | XL |
| S6-04 | Add agent session management (pre-configured defaults per session) | M |
| S6-05 | Add governance/voting privacy endpoints (encrypted ballots, homomorphic tally) | M |
| S6-06 | Add Jito gas abstraction endpoint (relay transactions via Jito bundles) | M |

**Outcome:** Revenue stream, enterprise compliance, multi-language SDK, gas abstraction.

---

## Summary

| Phase | Theme | Issues | Timeline | Key Outcome |
|-------|-------|--------|----------|-------------|
| 1 | Hackathon Polish | 7 | Feb 5-12 | 65+ tests, demo script, forum presence |
| 2 | Production Hardening | 7 | Feb-Mar | Auth tiers, Redis, OpenAPI docs |
| 3 | Advanced Privacy | 7 | Mar-Apr | Surveillance scoring, ZK proofs, C-SPL, webhooks |
| 4 | Multi-Chain | 6 | Apr-Jun | 6 chain families, unified transfer endpoint |
| 5 | Backend Aggregation | 5 | Jun-Aug | 5+ privacy backends, smart routing |
| 6 | Enterprise | 6 | Aug-Dec | Revenue, compliance, SDK generation |

**Total: 38 issues across 6 phases**

---

**Last Updated:** 2026-02-04
