/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
	const obj = {};

	for (const num of nums) {
		obj[num] = (obj[num] ?? 0) + 1;
	}

	return Object.values(obj).some(item => item > 1);
};
