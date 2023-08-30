/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = nums => {
	let count = 0;

	for (let i = 0; i < nums.length - 1; i++) {
		const first = nums[i];
		for (let j = i + 1; j < nums.length; j++) {
			if (first !== nums[j]) continue;

			count += 1;
		}
	}

	return count;
};