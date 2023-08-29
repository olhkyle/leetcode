/**
 * @param {number} num
 * @param {number} t
 * @return {number}
 */
const theMaximumAchievableX = (num, t) => {
	let x;

	for (let i = 1; i <= t; i++) {
		num += 1;
	}

	x = num + t;

	return x;
};
