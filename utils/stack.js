// LIFO
class Stack {
	#elements = [];

	constructor(elements = []) {
		if (!Array.isArray(elements)) throw new TypeError(`${elements} is not an Array`);

		this.#elements = [...elements];
	}

	[Symbol.iterator]() {
		return this.#elements[Symbol.iterator]();
	}

	/**
	 * 인수로 배열을 전달받아 stack을 생성한다.
	 * - 인수를 전달하지 않으면 빈 stack을 생성한다.
	 * - stack 객체는 이터러블이다.
	 * - 인수로 배열 이외의 값을 전달하면 에러를 발생시킨다.
	 */
	static from(elements) {
		return new Stack(elements);
	}

	/**
	 * 인수로 여러 개의 요소를 전달받아 stack을 생성한다.
	 * - 인수를 전달하지 않으면 빈 stack을 생성한다.
	 * - stack 객체는 이터러블이다.
	 */
	static of(...elements) {
		return new Stack(elements);
	}

	get size() {
		return this.#elements.length;
	}

	push(value) {
		// arguments in need
		if (arguments.length !== 0) this.#elements.push(value);

		return this;
	}

	pop() {
		this.#elements.pop();
		return this;
	}

	peek() {
		return this.isEmpty() ? null : this.#elements.at(-1);
	}

	isEmpty() {
		return this.size() === 0;
	}

	/** return shallow copy */
	clone() {
		return new Stack(this.#elements);
	}

	clear() {
		this.#elements = [];
		return this;
	}
}
