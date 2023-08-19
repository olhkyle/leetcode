/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
	const LENGTH = nums.length;
	if (nums.includes(target)) return nums.findIndex(num => num === target);

	for (let i = 0; i < LENGTH; i += 1) {
		if (nums[i] > target) return 0;

		if (nums[i] < target && nums[i + 1] > target) return i + 1;

		if (nums.at(-1) < target) return LENGTH;
	}
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1, 3, 5], 4)); // 2
