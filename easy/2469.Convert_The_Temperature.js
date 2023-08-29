/**
 * @param {number} celsius
 * @return {number[]}
 */
const convertTemperature = celsius => {
	return [celsius + 273.15, celsius * 1.8 + 32.0];
};
