import { ethers } from "ethers";
import "./Buys.css";

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
		alert("transaction is successful");
		window.location.reload();
	};
	return (
		<div className="center">
			<h1>Thanks</h1>
			<form onSubmit={buyChai}>
				<div className="inputbox">
					<input type="text" required="required" id="name" />
					<span>Name</span>
				</div>
				<div className="inputbox">
					<input type="text" required="required" id="message" />
					<span>Message</span>{" "}
				</div>
				<div className="inputbox">
					<input type="submit" value="Pay" disabled={!state.contract} />
				</div>
			</form>
		</div>
	);
};
export default Buy;
