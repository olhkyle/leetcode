/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = nums => {
	return nums.sort((a, b) => a - b)[Math.floor(nums.length / 2)];
};
