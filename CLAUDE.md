# CLAUDE.md - Sipher

> **Ecosystem Hub:** See [sip-protocol/CLAUDE.md](https://github.com/sip-protocol/sip-protocol/blob/main/CLAUDE.md) for full ecosystem context

**Repository:** https://github.com/sip-protocol/sipher
**Live URL:** https://sipher.sip-protocol.org
**Tagline:** "Privacy-as-a-Skill for Solana Agents"
**Purpose:** REST API + OpenClaw skill enabling any autonomous agent to add transaction privacy via SIP Protocol

---

## PRODUCT POSITIONING

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  SIP ECOSYSTEM                                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  @sip-protocol/sdk — THE PRIVACY STANDARD                                  │
│  "Any app can add privacy with one line of code"                            │
│                                                                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐       │
│  │  sip-app     │ │  sip-mobile  │ │  sip-website │ │  SIPHER      │       │
│  │  Web App     │ │  Native App  │ │  Marketing   │ │  Agent API   │       │
│  │  Humans      │ │  Consumers   │ │  Awareness   │ │  AI Agents   │       │
│  │              │ │              │ │              │ │  ← YOU ARE   │       │
│  └──────────────┘ └──────────────┘ └──────────────┘ └──────────────┘       │
│                                                                             │
│  Sipher is SIP's agent-facing interface — the same privacy primitives       │
│  (stealth addresses, Pedersen commitments, viewing keys) exposed as a       │
│  REST API and OpenClaw-compatible skill for autonomous agents.              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## CONTEXT

**Origin:** Colosseum Agent Hackathon (Feb 2-12, 2026) — $100K USDC prize pool
**Agent ID:** 274 | **Status:** active
**Credentials:** `~/.claude/sip-protocol/sipher/CREDENTIALS.md` (never commit)
**Hackathon API:** `https://agents.colosseum.com/api`

---

## WHAT SIPHER DOES

Any autonomous agent (OpenClaw, Claude Code, LangChain, etc.) can call Sipher to:

1. **Generate stealth addresses** — one-time recipient addresses (unlinkable)
2. **Create shielded transfers** — hide sender, amount, recipient via Pedersen commitments
3. **Scan for payments** — detect incoming shielded payments using viewing keys
4. **Selective disclosure** — share viewing keys with auditors for compliance

All powered by SIP Protocol's mainnet-deployed Anchor program (`S1PMFspo4W6BYKHWkHNF7kZ3fnqibEXg3LQjxepS9at`).

---

## TECH STACK

- **Runtime:** Node.js 22+ (LTS)
- **Framework:** Hono (lightweight, edge-ready)
- **Language:** TypeScript (strict)
- **Core:** @sip-protocol/sdk (stealth addresses, commitments, encryption)
- **Solana:** @solana/kit (transactions, RPC)
- **Testing:** Vitest
- **Deployment:** Docker + GHCR → VPS (port TBD)
- **Domain:** sipher.sip-protocol.org

---

## DEVELOPMENT COMMANDS

```bash
pnpm install                    # Install dependencies
pnpm dev                        # Dev server
pnpm build                      # Build for production
pnpm test -- --run              # Run tests
pnpm typecheck                  # Type check
```

---

## PROJECT STRUCTURE

```
sipher/
├── src/
│   ├── index.ts                # Entry point, Hono app
│   ├── routes/                 # API route handlers
│   │   ├── stealth.ts          # Stealth address endpoints
│   │   ├── transfer.ts         # Shielded transfer endpoints
│   │   ├── scan.ts             # Payment scanning endpoints
│   │   └── health.ts           # Health check
│   ├── services/               # Business logic
│   │   ├── privacy.ts          # SIP SDK wrapper
│   │   └── solana.ts           # Solana transaction building
│   └── middleware/             # Auth, rate limiting, logging
├── skill.md                    # OpenClaw-compatible skill file
├── Dockerfile                  # Production container
├── docker-compose.yml          # Deployment config
└── tests/                      # Test suites
```

---

## KEY ENDPOINTS

| Method | Path | Description |
|--------|------|-------------|
| GET | `/` | Service info + docs |
| GET | `/skill.md` | OpenClaw skill file |
| GET | `/health` | Health check |
| POST | `/v1/stealth/generate` | Generate stealth address |
| POST | `/v1/stealth/derive` | Derive stealth address from meta-address |
| POST | `/v1/transfer/shield` | Create shielded transfer |
| POST | `/v1/scan/payments` | Scan for incoming payments |
| POST | `/v1/disclose` | Generate viewing key disclosure |

---

## VPS DEPLOYMENT

| Field | Value |
|-------|-------|
| **User** | sipher |
| **Port** | TBD (reserve in ~/.ssh/vps-port-registry.md) |
| **Domain** | sipher.sip-protocol.org |
| **Container** | sip-sipher |
| **SSH** | `ssh sipher` |

---

## AI GUIDELINES

### DO:
- Run `pnpm test -- --run` after code changes
- Use @sip-protocol/sdk for all crypto operations (never roll your own)
- Keep API responses consistent and well-documented
- Reference ecosystem CLAUDE.md for shared standards

### DON'T:
- Commit credentials or API keys
- Expose private keys through the API
- Skip input validation on public endpoints
- Break compatibility with OpenClaw skill format

---

**Last Updated:** 2026-02-03
**Status:** Hackathon Build Phase | Agent #274 Active
