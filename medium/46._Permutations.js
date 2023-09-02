/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = nums => {
	const result = [];

	if (nums.length === 0) return [];
	if (nums.length === 1) return [nums];

	for (let i = 0; i < nums.length; i++) {
		console.log('nums', nums);
		const currentNum = nums[i];
		console.log('i', i);
		console.log('currentNum-first', currentNum);

		const remains = [...nums.slice(0, i), ...nums.slice(i + 1)];
		const permuteRemains = permute(remains);
		console.log('permuteRemains', permuteRemains);

		for (let j = 0; j < permuteRemains.length; j++) {
			console.log('start');
			console.log('currentNum-second', currentNum);
			const permuteArr = [currentNum, ...permuteRemains[j]];
			console.log('permuteArr', permuteArr);
			result.push(permuteArr);
			console.log('result', result);
			console.log('inside-nums', nums);
			console.log('over');
		}
	}

	return result;
};

console.log(permute([1, 2, 3]));
