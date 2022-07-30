import { ContractFactory, ethers } from './ethers-5.2.esm.min.js';

const deploy = async () => {
	var testABI_json = await fetch('Abi.json');
	var testABI = await testABI_json.json();

	var testBytecode_json = await fetch('Bytecode.json');
	var testBytecode = await testBytecode_json.json();

	const provider = new ethers.providers.Web3Provider(window.ethereum);
	const signer = provider.getSigner();

	console.log('provider-', provider);
	console.log('signer-', signer);
	console.log('abi : ', testABI);
	console.log('bytecode:', testBytecode.object);

	const factory = new ContractFactory(testABI, testBytecode.object, signer);

	const contract = await factory.deploy();

	console.log(contract.address);
	console.log(contract.deployTransaction);

	// CONTRACT_ADDRESS = contract.address;
	return contract.address;
};

export default deploy;
