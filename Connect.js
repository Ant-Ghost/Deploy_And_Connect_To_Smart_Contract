const connect = async () => {
	// if (window.ethereum) {
	// 	await window.ethereum.send('eth_requestAccounts');
	// 	window.web3 = new Web3(window.ethereum);
	// }
	if (typeof window.ethereum !== 'undefined') {
		console.log('We are in!!');
		var checks = await ethereum.request({
			method: 'eth_requestAccounts',
		});
		console.log('checks-', checks[0]);
		// window.accountTest = checks;
		return checks;
	}
	return undefined;
};

export default connect;
