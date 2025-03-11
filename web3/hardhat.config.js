require("dotenv").config();
require("@matterlabs/hardhat-zksync-solc");
require("@matterlabs/hardhat-zksync-verify");
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  zksolc: {
    version: "1.5.11",
    compilerSource: "binary",
    settings: {
      optimizer: { enabled: true },
      codegen: "evmla", // Add this line
    },
  },
  networks: {
    hardhat: {},
    zkSyncSepoliaTestnet: {
      url: "https://sepolia.era.zksync.dev",
      accounts: [`0x${process.env.PRIVATE_KEY}`], // Ensure your PRIVATE_KEY is set
      ethNetwork: "sepolia",
      zksync: true,
      chainId: 300,
    },
  },
  solidity: {
    version: "0.8.23",
    settings: {
      optimizer: { enabled: true, runs: 200 },
    },
  },
  defaultNetwork: "zkSyncSepoliaTestnet",
};
