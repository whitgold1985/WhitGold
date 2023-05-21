const hre = require("hardhat");

async function main() {
  const WhitGold = await hre.ethers.getContractFactory("WhitGold");
  const whitGold = await WhitGold.deploy(1000000000, 50);

  await whitGold.deployed();

  console.log("Whit Gold deployed: ", whitGold.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});