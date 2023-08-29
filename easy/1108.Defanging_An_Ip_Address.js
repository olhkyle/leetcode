/**
 * @param {string} address
 * @return {string}
 */
const defangIPaddr = address => {
	return address.split('.').join('[.]');
};
