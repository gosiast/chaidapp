// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.

const ethers = require("ethers");

const hre = require("hardhat");

async function main() {
	const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
	//fetching the artifacts, so we can deploy the smart contract
	//creating an object of smart contract (so we can TALK to the smart contract)
	const chai = await Chai.deploy(); // we're not passing anything to the constructor(in chai.sol)
	//so nothing inside the brackets in here as well

	await chai.waitForDeployment(); //deploying the smart contract

	// ! logging this variable we can see the contract address is called target
	// console.log(chai);

	console.log("Deployed contract address:", `${chai.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});

const hre = require("hardhat");

async function main() {
	const Chai = await hre.ethers.getContractFactory("chai"); //fetching bytecode and ABI
	const chai = await Chai.deploy(); //creating an instance of our smart contract

	await chai.deployed(); //deploying your smart contract

	console.log("Deployed contract address:", `${chai.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
