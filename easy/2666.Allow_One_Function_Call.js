/**
 * @param {Function} fn
 * @return {Function}
 */

/**
 * ➡️ Closure -> outer func return inner func with making a reference of variable which is inside outer func
 *
 *
 * inner fuc make a reference on count variable
 *
 * even though 'once func' and 'onceFn func' are removed from execution context, those lexical environment survive itself temporarily.
 *
 * Because as returned function(once Function's returned function) is defined, this function has a reference of its parent scope on internal [[Environment]] slot. And this function call by value of count variable
 *
 * It's the situation of closure. It's related to Execution Context and Lexical Environment with declarative Environmental Record and Object Environmental Record(+Function Environmental Record)
 */

const once = fn => {
	let count = 0;

	return (...args) => {
		if (count > 0) return;

		count += 1;
		return fn(...args);
	};
};

const once = fn => {
	let count = 0;

	return (...args) => {
		if (count > 0) return;

		count += 1;
		return fn(...args);
	};
};

// first mistake

const once = fn => {
	let count = 0;

	if (count > 0) return;

	return (...args) => {
		count += 1;
		return fn(...args);
	};
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
