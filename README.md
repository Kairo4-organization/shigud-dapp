
## About The Project

**shigud** is a multichain DeFi platform featuring a Burn Bank mechanism that combines staking with charitable donations and token burning. 

The core principle is simple: stake your tokens to become part of the ecosystem and/or donate ETH to automatically burn tokens from the staking pool. 
This process creates deflationary pressure on the staked token while supporting good causes and rewarding a lucky staker from the pool.

### Key Features

* ✅ Flexible & Multichain: The architecture supports staking for any ERC-20 token on any EVM-compatible blockchain.
* 🔥 Token Burning: Donations trigger automatic burning of tokens from the staking pool.
* 💖 Charitable Donations: A portion of every donation is routed to a registered charity through an Endaoment Fund.
* 🎁 Random Rewards: Win a share of donations in a lottery-like drawing just by staking.
* 📈 On-Chain Price Oracles: The burn mechanism relies on Uniswap V2/V3 pools directly for real-time, on-chain pricing.
* ⚖️ Weighted, Verifiable Rewards: Stakers are chosen for rewards based on their minimum stake held throughout an entire epoch, with randomness sourced from future block hashes.
* 🤝 Decentralized Voting: A network of off-chain nodes executes the reward selection and votes on-chain to achieve consensus.

### Usage

Run the development server with the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

#### Available Scripts

| Script            | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Starts the development server.                       |
| `npm run build`   | Builds the app for production.                       |
| `npm run preview` | Previews the production build locally.               |
| `npm run lint`    | Lints the codebase using ESLint.                     |
| `npm run lint:fix`| Lints and automatically fixes issues.                |
| `npm run format`  | Formats code using Prettier.                         |
| `npm run typecheck`| Performs a static type check using TypeScript.     |

---
