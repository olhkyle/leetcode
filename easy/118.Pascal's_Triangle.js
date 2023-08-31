/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = numRows => {
	const dp = [[1], [1, 1]];

	// Double Check numRows parameter type
	for (let i = 2; i < numRows; i++) {
		const arr = [];
		const currentArr = dp[i - 1];

		for (let j = 0; j <= currentArr.length; j++) {
			arr[j] = (currentArr[j - 1] ?? 0) + (currentArr[j] ?? 0);
		}

		dp.push(arr);
	}

	return dp.slice(0, numRows);
};
