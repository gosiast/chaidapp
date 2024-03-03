require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig  */

//we need this below to deploy smart contract on the goerli testnet
const GOERLI_URL =
	"https://eth-sepolia.g.alchemy.com/v2/z006jfB4ZHTSqK24tpUC26mI73jURGhm"; //accessing it from the .env file
const PRIVATE_KEY =
	"ec43e6a7e0f30693536173f9c6f29a95b17bdb9cde9c20bd8103576bd081a327"; //accessing it from the .env file

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
