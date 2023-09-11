/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = columnTitle => {
	return [...columnTitle].reduce((acc, cur, idx) => {
		acc += (cur.charCodeAt() - 64) * Math.pow(26, columnTitle.length - (idx + 1));

		return acc;
	}, 0);
};
