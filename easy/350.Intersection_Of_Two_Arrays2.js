/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/** Problem
 *
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.
 */

const intersect = (nums1, nums2) => {
	const done = {};
	const result = [];

	for (const num of nums1) {
		done[num] = (done[num] ?? 0) + 1;
	}

	for (const num of nums2) {
		if (done[num] > 0) {
			result.push(num);
			done[num] -= 1;
		}
	}

	return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2,2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4,9]
console.log(intersect([3, 1, 2], [1, 1])); // [1]
