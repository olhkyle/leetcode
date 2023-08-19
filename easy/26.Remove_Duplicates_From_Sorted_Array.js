/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = nums => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i + 1] === nums[i]) {
			nums.splice(i, 1);
			i -= 1;
		}
	}

	return nums.length;
};

console.log(removeDuplicates([1, 1, 2])); // [1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // [0,1,2,3,4]
