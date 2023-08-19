/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
	/** 풀이 1 */
	// return (parseInt(a, 2) + parseInt(b, 2)).toString(2); -> exceed 64 bit

	// /** 풀이 2 */
	// let sumOfA = 0;
	// let sumOfB = 0;
	// const reversedA = [...a].reverse();
	// const reversedB = [...b].reverse();
	// for (let i = 0; i <= a.length - 1; i += 1) {
	// 	if (i === 0) sumOfA += +reversedA[i] * 1;
	// 	else sumOfA += +reversedA[i] * Math.pow(2, i);
	// }
	// for (let i = 0; i <= b.length - 1; i += 1) {
	// 	if (i === 0) sumOfB += +reversedB[i] * 1;
	// 	else sumOfB += +reversedB[i] * Math.pow(2, i);
	// }
	// return (sumOfA + sumOfB).toString(2);
	/**
	 * 풀이 1,2 모두 아래의 테스트 케이스 오류
	 * const a = '110111101100010011000101110110100000011101000101011000000000000000000000000000000000000000000000000';
	 * const b = '110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000';
	 */

	const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
	return sum.toString(2);
};

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));
