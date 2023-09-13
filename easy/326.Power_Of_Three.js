/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = n => {
	if (n === 0) return false;
	if (n === 1) return true;

	return isPowerOfThree(n / 3);
};
