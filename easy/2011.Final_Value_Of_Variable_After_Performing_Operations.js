/**
 * @param {string[]} operations
 * @return {number}
 */
const finalValueAfterOperations = operations => {
	let x = 0;

	operations.forEach(operation => {
		switch (operation) {
			case '--X':
				x -= 1;
				break;
			case 'X--':
				x -= 1;
				break;
			case '++X':
				x += 1;
				break;
			case 'X++':
				x += 1;
				break;
			default:
				break;
		}
	});

	return x;
};
