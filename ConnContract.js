import { ethers } from './ethers-5.2.esm.min.js';

const getContract = async (CONTRACT_ADDRESS) => {
	// const contractAddress = '0x0A24174957D767778B3cD0e9F53Ed04163FBe5A2';
	const contractAddress = CONTRACT_ADDRESS;
	const abi = await (await fetch('Storage_abi.json')).json();
	console.log('abi:', abi);
	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner(); // this is going to get the connected account

	console.log('Signer:', signer);
	console.log('provider:', provider);
	const contract = new ethers.Contract(contractAddress, abi, signer);

	// const storeResult = await contract.store(42);
	// console.log(storeResult);

	// const retrieveResult = await contract.retrieve();
	// console.log(parseInt(retrieveResult._hex, 16));

	console.log('contract received:', contract);

	return contract;
};

export default getContract;
