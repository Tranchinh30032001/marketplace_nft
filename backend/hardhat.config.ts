import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/d433IEhEebymEoDsPhHfeKxiWL08eHJv",
      accounts: [
        "702790c7d46813c2db415c22f18c87a1b492a27fac614188c9488da6edd13bcf",
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
