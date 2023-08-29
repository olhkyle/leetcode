/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
	if (nums.length === 1) return nums[0];

	const result = {};

	for (const num of nums) {
		result[num] = (result[num] ?? 0) + 1;
	}

	return +Object.entries(result).find(item => item[1] === 1)[0];
};
