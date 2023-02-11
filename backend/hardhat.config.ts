import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/d433IEhEebymEoDsPhHfeKxiWL08eHJv",
      accounts: [
        "70f9f78e0a61f705a2d1b80076bc673c9c01d66e8e12c40ee7bc6e7bda02d2d8",
      ],
      chainId: 5,
    },
    localhost: {
      url: " http://127.0.0.1:8545/",
      accounts: [],
    },
  },
  etherscan: {
    apiKey: "68QM7KP2QDNGSCA6372IZJVJH9ARAVWDSX",
  },
};

export default config;
