/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// runtime 62ms
const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;

	const counts = {};

	for (const char of s) {
		counts[char] = (counts[char] ?? 0) + 1;
	}

	for (const char of t) {
		if (!counts[char]) return false;
		counts[char] -= 1;
	}

	return true;
};

// runtime 90ms
const isAnagram = (s, t) => {
	return [...t].sort().join('') === [...s].sort().join('');
};
