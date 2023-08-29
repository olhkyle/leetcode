/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

class ParkingSystem {
	constructor(big, medium, small) {
		this.big = big;
		this.medium = medium;
		this.small = small;
		this.isParked = [big, medium, small];
	}

	addCar(carType) {
		if (this.isParked[carType - 1] !== 0) {
			this.isParked[carType - 1] -= 1;
			return true;
		}

		return false;
	}
}
