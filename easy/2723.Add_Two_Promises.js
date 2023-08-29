/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async (promise1, promise2) => {
	const promiseFunc1 = () => promise1;
	const promiseFunc2 = () => promise2;

	const result1 = await promiseFunc1();
	const result2 = await promiseFunc2();

	return result1 + result2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

let data = null;

const fetchDataLazy = () =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve([
				{ name: 'A', value: 1 },
				{ name: 'B', value: 2 },
			]);
		}, 1000);
	});

const render = async () => {
	try {
		const result = await fetchDataLazy();
		data = result;
		console.log(data);
	} catch (e) {
		console.error(e);
	}
};

render();
