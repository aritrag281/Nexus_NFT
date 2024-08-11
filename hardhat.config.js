
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
    networks:{
      sepolia: {
      url: `https://sepolia.infura.io/v3/008163aea6bf4cce9b12f215ec5d09fd`,
      accounts: [`yourprivatekey`], // Make sure to replace with your private key
      chainId: 11155111,
    },
  },
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};

