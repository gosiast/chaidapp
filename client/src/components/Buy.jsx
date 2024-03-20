import { ethers } from "ethers";

const Buy = ({ state }) => {
	const buyChai = async (event) => {
		event.preventDefault(); // it won't refresh
		const { contract } = state;
		// in chai.sol contract we have buyChai function
		//where are callbacks: name and message
		// with .value we see the value that was typed
		const name = document.querySelector("#name").value;
		const message = document.querySelector("#message").value;

		//the key should be a value
		//we can't send ether value, it must be wei?
		const amount = { value: ethers.parseEther("0.001") };
		const transaction = await contract.buyChai(name, message, amount);
		await transaction.wait(); //when the transaction will be successful
	};
	console.log("transaction is successful");
	return (
		<>
			<form onSubmit={buyChai}>
				<input id="name"></input>
				<input id="message"></input>
				<button>Pay</button>
			</form>
		</>
	);
};
export default Buy;
