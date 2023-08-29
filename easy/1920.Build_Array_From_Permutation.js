/**
 * @param {number[]} nums
 * @return {number[]}
 */
const buildArray = nums => {
	return nums.map((_, idx) => nums[nums[idx]]);
};
