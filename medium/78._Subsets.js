/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = nums => {
	let result = [[]];

	for (const num of nums) {
		const inner = [];

		for (const current of result) {
			inner.push([...current, num]);
		}

		result = [...result, ...inner];
	}

	return result;
};
