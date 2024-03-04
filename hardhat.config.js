require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig  */

//we need this below to deploy smart contract on the goerli testnet
const GOERLI_URL = process.env.GOERLI_URL; //accessing it from the .env file
const PRIVATE_KEY = process.env.PRIVATE_KEY; //accessing it from the .env file

module.exports = {
	solidity: "0.8.17",
	networks: {
		goerli: {
			url: GOERLI_URL,
			accounts: [PRIVATE_KEY],
		},
	},
};
// deployed contract addresss 0x5FbDB2315678afecb367f032d93F642f64180aa3
// private key - metamask wallet
