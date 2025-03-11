const { ethers } = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory("YourContractName"); // Replace with your contract name
  const contract = await Contract.deploy(); // Pass constructor args if needed

  await contract.deployed();
  console.log("Contract deployed at:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
