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
		};
		//when we have the contract then let's call memos message
		contract && memosMessage();
	}, [contract]);
	return (
		<>
			{memos.map((memo) => {
				return (
					<div>
						<p>{memo.name}</p>
						<p>{memo.message}</p>
						<p>{new Date(memo.timestamp * 1000).toLocaleString()}</p>
						<p>{memo.from}</p>
					</div>
				);
			})}
		</>
	);
};
export default Memos;
