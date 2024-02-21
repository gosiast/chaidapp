import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [state, setState] = useState({
		provider: null,
		signer: null,
		contract: null,
	});

	const [account, setAccount] = useState("not connected");

	//using useeffect because wants to automatically fetch contracts
	useEffect(() => {
		const template = async () => {
			//1st step- fetching the address and the ABI
			const contractAddress = ""; // it has to be complete
			const contractABI = ""; // it also has to be complete
			//here will be the code that will connect to MetaMask wallet
			//in order to do transactions on goerli testnet
			//metamask consists of infura api which helps in connecting to the blockchain
			//connecting the the wallet

			try {
				//try is in case someone doesn't have an account

				const { ethereum } = window;
				const account = await ethereum.request({
					method: "eth_requestAccounts", //automatically open metamask wallet whenever user visits the website
				});
				setAccount(account);

				// provider will help us connect with the blockchain
				//for that we need hardhat ether library
				const provider = new ethers.providers.Web3Provider(ethereum);

				//we have a signer - helps us doing transactions that will change state of the blockchain
				const signer = provider.getSigner(); //it helps writing the blockchains

				//3 things required to create instance
				const contract = new ethers.Contract(
					contractAddress, //this is where my contract is deployed, so i wanna go there
					contractABI, // i need ABi bc i want to 'talk' to smart contract, it's required
					signer //we can do all sort of transactions on the contract
				);
				setState({ provider, signer, contract });
			} catch (error) {
				alert(error);
			}
		};

		template();
	});
	return (
		<>
			<div className="App"></div>
		</>
	);
}

export default App;
