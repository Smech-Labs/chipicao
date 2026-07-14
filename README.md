# 🍫 Chipicao

**Visual Ethereum DApp Builder** — drag-and-drop Scratch-style blocks to generate Solidity contracts and frontend DApps, no coding required.

## Live Demo

**[chipicao.smech.dev](https://smech-labs.github.io/chipicao)** ← GitHub Pages

## What it does

- Drag blocks like Scratch to define a Solidity smart contract
- Simultaneously generates the matching frontend HTML+ethers.js DApp
- Live preview of your DApp in the editor
- Compile Solidity right in the browser (solc wasm — no backend needed)
- Export `.sol` and `index.html` ready to deploy
- Save/load projects as XML
- Press `/` to search blocks

## Block categories

| Category | What it builds |
|---|---|
| 📜 Contract | Solidity contract structure, state vars, functions |
| ⚡ Events | Event declarations and emit statements |
| 💎 ETH | ETH transfer operations |
| 🌐 Frontend | DApp page, buttons, displays, inputs |
| 👛 Wallet | Connect wallet, show address, show balance |
| 🔀 Logic | Comparisons, booleans |
| 🔢 Math | Numbers, arithmetic |
| 💬 Text | String values |

## Run locally (with real solc compilation)

Requires [Bun](https://bun.sh).

```bash
git clone https://github.com/Smech-Labs/chipicao
cd chipicao
bun install
bun dev
```

Open `http://localhost:3000`.

Local mode compiles Solidity server-side via the real `solc` Node.js binary (faster, full error output). GitHub Pages mode compiles in the browser via solc wasm loaded on demand from soliditylang.org.

## License

MIT — see [LICENSE](LICENSE).
