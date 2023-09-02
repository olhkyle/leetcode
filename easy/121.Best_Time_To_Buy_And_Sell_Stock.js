/**
 * @param {number[]} prices
 * @return {number}
 */

// TODO: heap out of memory
const maxProfit = prices => {
	const stock = [];

	for (let i = 0; i < prices.length - 1; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[i] - prices[j] >= 0) continue;

			stock.push({ profit: prices[j] - prices[i], i: i, j: j });
		}
	}

	console.log(stock);

	if (stock.length === 0) return 0;

	return stock.sort((a, b) => a - b).at(-1);
};

// two pointer
const maxProfit = prices => {
	let max = 0;

	let left = 0;
	let right = 1;

	while (right < prices.length) {
		if (prices[left] < prices[right]) {
			let profit = prices[right] - prices[left];

			max = Math.max(max, profit);
		} else {
			left = right;
		}
		right += 1;
	}

	return max;
};
