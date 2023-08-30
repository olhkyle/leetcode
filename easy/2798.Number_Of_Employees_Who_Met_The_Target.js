/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
const numberOfEmployeesWhoMetTarget = (hours, target) => {
	return hours.filter(hour => hour >= target).length;
};
