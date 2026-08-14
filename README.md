# scash-wallet

Simple scash wallet app — a lightweight wallet for Scash (Bitcoin-derived coin) that avoids requiring users to run a full node. This repository is a starter scaffold (Electron + React + TypeScript) containing a minimal wallet core demo, network adapter stubs, platform keystore stubs, basic tests and CI.

Goals
- Provide a simple send/receive wallet that stores keys locally encrypted
- Use HD seeds (BIP39/BIP32) and derive addresses
- Network abstraction layer (Electrum / public API) so users don't need a full node
- Desktop app (Electron + React) as the initial target

Quickstart (development)

Prereqs
- Node.js 18+ and npm

Install

npm install

Run demo CLI (generates a seed and derives an address)

npm run demo

What I scaffolded
- README, LICENSE (MIT), .gitignore
- package.json, tsconfig.json
- src/ core, network, platform and ui skeletons
- tests/ with a basic unit test
- docs/SECURITY.md and docs/ROADMAP.md
- .github/workflows/ci.yml

Next steps
- Provide scash-specific network parameters (address prefixes / bech32 hrp)
- Implement/plug an Electrum-compatible server or trusted API provider
- Harden key storage (OS keystore, Argon2, XChaCha20-Poly1305)
- Build a simple Electron UI and package installers

License: MIT

