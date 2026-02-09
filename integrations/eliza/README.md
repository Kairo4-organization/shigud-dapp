# @sip-protocol/plugin-eliza

Eliza plugin that gives any AI agent privacy superpowers via [Sipher](https://sipher.sip-protocol.org).

5 privacy actions + 1 status provider, built on SIP Protocol's stealth address and commitment primitives.

## Install

```bash
# In your Eliza agent project:
npm install @sip-protocol/plugin-eliza
```

> **Hackathon note:** Not published to npm yet. Copy the `integrations/eliza/` directory into your project, or install from GitHub:
>
> ```bash
> npm install github:sip-protocol/sipher#main --workspace=integrations/eliza
> ```

## Configure

Add Sipher settings to your agent's character file:

```json
{
  "name": "PrivacyAgent",
  "settings": {
    "SIPHER_API_KEY": "your-api-key",
    "SIPHER_URL": "https://sipher.sip-protocol.org"
  }
}
```

| Setting | Required | Default | Description |
|---------|----------|---------|-------------|
| `SIPHER_API_KEY` | Yes | — | API key for Sipher endpoints |
| `SIPHER_URL` | No | `https://sipher.sip-protocol.org` | Sipher API base URL |
| `SIPHER_VIEWING_PRIVATE_KEY` | No | — | For automatic payment scanning |
| `SIPHER_SPENDING_PUBLIC_KEY` | No | — | For automatic payment scanning |
| `WALLET_ADDRESS` | No | — | Default wallet for privacy scoring |

## Register

```typescript
import { sipherPlugin } from '@sip-protocol/plugin-eliza'

// In your character config:
export default {
  name: 'PrivacyAgent',
  plugins: [sipherPlugin],
  // ...
}
```

## Actions

| Action | Triggers | Endpoint | Description |
|--------|----------|----------|-------------|
| `STEALTH_GENERATE` | "stealth address", "private address", "receive privately" | `POST /v1/stealth/generate` | Generate stealth meta-address keypair (17 chains) |
| `TRANSFER_SHIELD` | "shield", "send privately", "private transfer" | `POST /v1/transfer/shield` | Build unsigned shielded transfer |
| `SCAN_PAYMENTS` | "scan", "check payments", "incoming" | `POST /v1/scan/payments` | Detect incoming stealth payments |
| `PRIVACY_SCORE` | "privacy score", "analyze", "wallet privacy" | `POST /v1/privacy/score` | Wallet privacy analysis (0-100) |
| `COMMITMENT_CREATE` | "commitment", "hide amount", "pedersen" | `POST /v1/commitment/create` | Create Pedersen commitment |

## Provider

**`SIPHER_STATUS`** — Injects Sipher API health into agent context during `composeState()`. Returns connection status, Solana RPC latency, and uptime. Graceful fallback when API is unreachable.

## Example Conversation

```
User: Generate a stealth address for Ethereum
Agent: Creating an Ethereum stealth keypair now.
       Generated ethereum stealth meta-address:
         Spending key: 04a1b2c3d4e5f6...
         Viewing key:  04f6e5d4c3b2a1...
       Share these public keys with senders.

User: What's my wallet's privacy score?
Agent: Analyzing your wallet's privacy posture.
       Privacy analysis for GsbwXfJraMom...:
         Score: 42/100 (D)
         Surveillance risk: 71/100
         Recommendations:
           - Use stealth addresses for receiving
           - Avoid address reuse
           - Consider shielded transfers
```

## Development

```bash
# Run the standalone demo (no Eliza runtime needed):
npx tsx scripts/eliza-plugin-demo.ts

# Against production:
SIPHER_URL=https://sipher.sip-protocol.org npx tsx scripts/eliza-plugin-demo.ts
```

## Architecture

```
src/
├── index.ts              # Plugin export (sipherPlugin)
├── client.ts             # SipherClient + createClient factory
├── actions/
│   ├── stealthGenerate   # Stealth keypair generation
│   ├── transferShield    # Shielded transfer building
│   ├── scanPayments      # Payment detection
│   ├── privacyScore      # Wallet privacy analysis
│   └── commitmentCreate  # Pedersen commitments
└── providers/
    └── sipherStatus      # Health/status context provider
```

## License

MIT
