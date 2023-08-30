/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStones = (jewels, stones) => {
	let count = 0;

	for (let i = 0; i < stones.length; i++) {
		if (jewels.includes(stones.charAt(i))) count += 1;
	}

	return count;
};
