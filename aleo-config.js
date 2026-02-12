import dotenv from 'dotenv';
dotenv.config();

export default {
  accounts: [process.env.ALEO_DEVNET_PRIVATE_KEY1],
  mode: 'execute',
  networks: {
    devnet: {
      network: 'testnet',
      endpoint: 'http://localhost:3030',
      accounts: [
        process.env.ALEO_DEVNET_PRIVATE_KEY1,
        process.env.ALEO_DEVNET_PRIVATE_KEY2,
        process.env.ALEO_DEVNET_PRIVATE_KEY3,
        process.env.ALEO_DEVNET_PRIVATE_KEY4,
        process.env.ALEO_DEVNET_PRIVATE_KEY5,
        process.env.ALEO_DEVNET_PRIVATE_KEY6,
        process.env.ALEO_DEVNET_PRIVATE_KEY7,
        process.env.ALEO_DEVNET_PRIVATE_KEY8,
        process.env.ALEO_DEVNET_PRIVATE_KEY9,
        process.env.ALEO_DEVNET_PRIVATE_KEY10,
      ],
      priorityFee: 0.01
    },
    testnet: {
      network: 'testnet',
      endpoint: 'https://api.explorer.provable.com/v1',
      accounts: [
        process.env.ALEO_TESTNET_PRIVATE_KEY1,
        process.env.ALEO_TESTNET_PRIVATE_KEY2
      ],
      priorityFee: 0.01
    },
    mainnet: {
      network: 'mainnet',
      endpoint: 'https://api.explorer.provable.com/v1',
      accounts: [process.env.ALEO_PRIVATE_KEY_MAINNET],
      priorityFee: 0.001
    }
  },
  defaultNetwork: 'devnet'
};