import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [state, setState] = useState({
		provider: null,
		signer: null,
		contract: null,
	});

	//using useeffect because wants to automatically fetch contracts
	useEffect(() => {
		const template = async () => {
			const contractAddress = "";
			const contractABI = "";
			//here will be the code that will connect to MetaMask wallet
			//in order to do transactions on goerli testnet
			//metamask consists of infura api which helps in connecting to the blockchain
		};
	});
	return (
		<>
			<div className="App"></div>
		</>
	);
}

export default App;
