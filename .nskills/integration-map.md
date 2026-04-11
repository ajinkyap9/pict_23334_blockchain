# Integration Map

How components connect and what data flows between them.

### Erc721-stylus --> Frontend-scaffold

- **Source**: Erc721-stylus (`36187e84`)
  - Output ports: NFT Contract (contract)
- **Target**: Frontend-scaffold (`43cdf920`)
  - Input ports: Contract ABI (contract), Network Config (config)

### Frontend-scaffold --> Wallet-auth

- **Source**: Frontend-scaffold (`43cdf920`)
  - Output ports: App Context (config)
- **Target**: Wallet-auth (`b7c0bb57`)
  
