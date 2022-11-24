import { ethers } from './ethers-5.2.esm.min.js';

const getContract = async (CONTRACT_ADDRESS) => {
	// const contractAddress = '0x0A24174957D767778B3cD0e9F53Ed04163FBe5A2';
	const contractAddress = CONTRACT_ADDRESS;
	const abi = await (await fetch('Abi.json')).json();
	console.log('abi:', abi);
	//const provider = new ethers.providers.Web3Provider(window.ethereum);
	// const provider = new ethers.providers.Web3Provider(
	// 	'0x0D61b27cB8A5e5C53F6D48E4524D58B08E7df7bc'
	// );

	// const signer = provider.getSigner(); // this is going to get the connected account
	const provider = new ethers.providers.JsonRpcProvider(
		"http://54.83.105.94/blockchain"
	);
	console.log('provide:', provider);
	const signer = provider.getSigner("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266");
	// console.log('Signer:', signer);
	// console.log('provider:', provider);
	const contract = new ethers.Contract(contractAddress, abi, signer);
	// console.log(signer)
	// const storeResult = await contract.store(42);
	// console.log(storeResult);

	// const retrieveResult = await contract.retrieve();
	// console.log(parseInt(retrieveResult._hex, 16));

	// console.log('contract received:', contract);

	return contract;
	// return null;
};

export default getContract;
