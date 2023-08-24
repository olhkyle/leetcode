// FIFO
class Queue {
	#elements = [];

	constructor(elements = []) {
		if (!Array.isArray(elements)) throw new TypeError(`${elements} is not an Array`);

		this.#elements = [...elements];
	}

	[Symbol.iterator]() {
		return this.#elements[Symbol.iterator]();
	}

	/**
	 * Create a queue from an array, taking an array as an argument.
	 * ➡️ Create an empty Queue if no arguments are passed
	 * ➡️ Passing a non-array value as an argument will raise an error.
	 */
	static from(elements) {
		return new Queue(elements);
	}

	/**
	 * Create a Queue with multiple elements passed as arguments.
	 * ➡️ create an empty Queue if no arguments are passed
	 */
	static of(...elements) {
		return new Queue(elements);
	}

	get size() {
		return this.#elements.length;
	}

	enqueue(value) {
		if (arguments.length !== 0) this.#elements.push(value);
		return this;
	}

	dequeue() {
		this.#elements.shift();
		return this;
	}

	peek() {
		return this.isEmpty() ? null : this.#elements.at(-1);
	}

	isEmpty() {
		return this.size === 0;
	}

	clone() {
		return new Queue(this.#elements);
	}

	clear() {
		this.#elements = [];
		return this;
	}
}
