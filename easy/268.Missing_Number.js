/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
	const sorted = nums.sort((a, b) => a - b);

	for (let i = 0; i <= nums.length; i++) {
		if (sorted.includes(i)) continue;

		return i;
	}
};
