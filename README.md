# USDCX Contract Issue Report


## Setup Instructions

## 1) Install Leo CLI

Build Leo from source:

```bash
git clone https://github.com/ProvableHQ/leo.git
cd leo
git checkout v3.4.0
cargo install --path .
```

---

## 2) Install `snarkOS`

Clone the staging branch and install:

```bash
git clone https://github.com/ProvableHQ/snarkOS.git
cd snarkOS
git checkout v4.4.0

# Install the snarkos binary
cargo install --path=. --features test_network
```

---

## Steps to Reproduce

1. Install dokojs cli: ```npm i -g @doko-js/cli@1.1.1-beta```
2. Compile using : ```dokojs compile``` 
3. Update this file: artifacts/js/pondo_protocol.ts 
    Add the given code to this file:
    ```bash
   import { validator_state } from "./types/delegator1";
   import { getvalidator_state } from "./leo2js/delegator1";
    ```
4.Deploy contracts:

```bash
npm run test --runInBand -- test/1_deploy_contracts.test.ts
```
5. Initialize contract:

```bash
npm run test --runInBand -- test/2_contract_init.test.ts
```

6. Run private-to-public transfer test:

```bash
npm run test --runInBand -- test/transfer_private_to_public.test.ts
```

## Issue Observed

* Function: `transfer_private_to_public`
* Error:

```
⚙️ Executing test_usdcx_stablecoin.aleo/transfer_private_to_public...
Failed to parse JSON error response
```

