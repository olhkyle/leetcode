/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = (nums, n) => {
	const frontPartOfNums = nums.slice(0, n);
	const rearPartOfNums = nums.slice(n);

	return nums.map((num, idx) => (idx % 2 === 0 ? frontPartOfNums.at(idx / 2) : rearPartOfNums.at(Math.floor(idx / 2))));
};
