/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = (haystack, needle) => {
	if (!haystack.includes(needle)) return -1;

	return haystack.indexOf(needle);
};

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('mississippi', 'issip')); // 1;

//  miss  issip  pi
