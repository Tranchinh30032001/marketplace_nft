import { ethers, hardhatArguments } from "hardhat";
import * as configs from "./config";
import * as fs from "fs";

async function main() {
  configs.initConfig();
  const network = hardhatArguments.network ? hardhatArguments.network : "local";
  const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();
  await nftMarketplace.deployed();
  const nftMarketplaceABI = JSON.parse(
    fs.readFileSync(
      "./artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json",
      "utf-8"
    )
  );
  configs.setConfig(network + ".NFTMarketplaceAddress", nftMarketplace.address);
  configs.setConfig(
    network + ".NFTMarketplaceABI",
    JSON.stringify(nftMarketplaceABI["abi"])
  );
  await configs.updateConfig();
  console.log("address deploy: ", nftMarketplace.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
