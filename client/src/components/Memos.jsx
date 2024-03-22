/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
//we need state to 'talk' to the smart contract
import "./Memos.css";

const Memos = ({ state }) => {
	const [memos, setMemos] = useState([]);
	const { contract } = state;

	useEffect(() => {
		const memosMessage = async () => {
			console.log(contract);
			const memos = await contract.getMemos();
			console.log(memos);
			setMemos(
				memos.map((memo) => ({
					name: memo[0],
					message: memo[1],
					timestamp: Number(memo[2]),
					from: memo[3],
				}))
			); //set with the result
		};
		//when we have the contract then let's call memos message
		contract && memosMessage();
	}, [contract]);
	console.log("state", memos);

	return (
		<div className="container-fluid">
			<h3 style={{ textAlign: "center", marginTop: "20px" }}>Messages</h3>
			<table>
				<tbody>
					{memos.map((memo) => {
						return (
							<tr>
								<td
									style={{
										backgroundColor: "dodgerblue",
										border: "1px solid white",
										borderCollapse: "collapse",
										padding: "7px",
										width: "100px",
										color: "white",
									}}
								>
									{memo.name}
								</td>
								<td
									style={{
										backgroundColor: "dodgerblue",
										border: "1px solid white",
										borderCollapse: "collapse",
										padding: "7px",
										width: "800px",
										color: "white",
									}}
								>
									{new Date(memo.timestamp * 1000).toLocaleString()}
								</td>
								<td
									style={{
										backgroundColor: "dodgerblue",
										border: "1px solid white",
										borderCollapse: "collapse",
										padding: "7px",
										width: "300px",
										color: "white",
									}}
								>
									{memo.message}
								</td>
								<td
									className="container-fluid"
									style={{
										backgroundColor: "dodgerblue",
										border: "1px solid white",
										borderCollapse: "collapse",
										padding: "7px",
										width: "400px",
										color: "white",
									}}
								>
									{memo.from}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
export default Memos;
