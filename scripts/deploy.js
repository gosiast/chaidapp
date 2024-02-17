// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
	const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
	//creating an object of smart contract (so we can TALK to the smart contract)
	const chai = await Chai.deploy(); // we're not passing anything to the constructor so nothing inside the brackets

	await chai.chai(); //deploying smart contract

	console.log("Deployed contract addres:", `${chai.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
