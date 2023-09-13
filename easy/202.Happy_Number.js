/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = n => {
	if (n === 1) return true;

	let value = n;

	const map = new Map();

	while (!map.get(value)) {
		value = [...(value + '')].reduce((acc, cur) => (acc += Math.pow(+cur, 2)), 0);

		if (!map.has(value)) map.set(value, false);
		else return false;
		if (value === 1) return true;
	}
};
