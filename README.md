# SIGILLARIUM

Deterministic universal artifact sealing protocol producing reproducible integrity bundles independent of identity, blockchain, or centralized services.

## Monorepo

- `packages/core` → `@sigillarium/core` (engine)
- `packages/cli`  → `sigillarium` (CLI)

## Bundle shape (target)

```text
bundle.zip
 ├ artifact/original
 ├ artifact/sha256.txt
 ├ manifest/manifest.json
 ├ certificate/certificate.json
 ├ proof/proof.json
 ├ receipt/receipt.json
 ├ verify/VERIFY.txt
 └ SIGILLARIUM.json

