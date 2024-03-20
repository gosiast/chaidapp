import { useEffect, useState } from "react";
//we need state to 'talk' to the smart contract

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
	return <></>;
};
export default Memos;
