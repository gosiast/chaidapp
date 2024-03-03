require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig  */

//we need this below to deploy smart contract on the goerli testnet
const GOERLI_URL = process.env.GOERLI_URL; //accessing it from the .env file
const PRIVATE_KEY = process.env.PRIVATE_KEY; //accessing it from the .env file

console.log("GOERLI_URL:", GOERLI_URL);
console.log("PRIVATE_KEY:", PRIVATE_KEY);

module.exports = {
	solidity: "0.8.17",
	networks: {
		goerli: {
			url: GOERLI_URL,
			accounts: [PRIVATE_KEY],
		},
	},
};
