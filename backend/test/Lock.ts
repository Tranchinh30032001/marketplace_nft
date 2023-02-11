import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("NFTMarketplace", () => {
  const RootFixture = async () => {
    const [deployer, player, thirdPeople] = await ethers.getSigners();
    const NFTMarketplace = await ethers.getContractFactory("NFTMarketplace");
    const nftMarketplace = await NFTMarketplace.deploy();
    await nftMarketplace.deployed();
    return { deployer, player, thirdPeople, nftMarketplace };
  };
  it("Should Owner equa deployer", async () => {
    const { nftMarketplace, deployer } = await loadFixture(RootFixture);
    expect(await nftMarketplace.owner()).to.equal(deployer.address);
  });
});
