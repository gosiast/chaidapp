import { useState, useEffect } from "react";
import abi from "./contractJson/chai.json";
import Buy from "./components/Buy";
import Memos from "./components/Memos";
import { ethers } from "ethers"; // https://docs.ethers.org/v6/getting-started/
import "./App.css";
import chai from "./chai.png";

function App() {
	const [state, setState] = useState({
		provider: null,
		signer: null,
		contract: null,
	});

	const [account, setAccount] = useState("not connected");

	//using useEffect because wants to automatically fetch contracts
	useEffect(() => {
		// it's async bc will have a lot of await(promises?)
		const template = async () => {
			//1st step- fetching the address and the ABI
			const contractAddress = "0x9739177b2fc3f171719f41fb72fac8cff2bc5b35"; // it has to be complete afterwards
			const contractABI = abi.abi; // it also has to be complete later
			//here will be the code that will connect to MetaMask wallet
			//1. in order to do transactions on goerli testnet
			//2. metamask consists of infura api which helps connecting to the blockchain
			//==> connecting the the wallet

			try {
				//try is in case someone doesn't have an account/wallet

				const { ethereum } = window;
				//thanks to ethereum.request metamask wallet opens automatically
				const account = await ethereum.request({
					method: "eth_requestAccounts",
					// the above will automatically open metamask wallet whenever user visits the website
				});
				// this way once the account is changed, it refreshes automatically
				window.ethereum.on("accountsChanged", () => {
					window.location.reload();
				});
				setAccount(account);

				// provider will help us connect with the blockchain
				//for that we need hardhat ether.js library
				const provider = new ethers.BrowserProvider(window.ethereum);
				//then, we need a signer
				//signer helps us doing transactions that will change state of the blockchain
				const signer = await provider.getSigner();

				//3 things required to create instance (address,ABI,signer)
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
	}, []);
	return (
		<>
			<div>
				<img src={chai} className="img-fluid" alt=".." width="100%" />
				<p style={{ marginTop: "10px", marginLeft: "5px" }}>
					<small>Connected Account - {account}</small>
				</p>

				<Buy state={state} />
				<Memos state={state} />
			</div>
		</>
	);
}

export default App;
