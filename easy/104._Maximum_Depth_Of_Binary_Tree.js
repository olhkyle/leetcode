/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = root => {};

// class Queue {
// 	#elements = [];

// 	constructor(elements = []) {
// 		if (!Array.isArray(elements)) throw new TypeError(`${elements} is not an Array`);

// 		this.#elements = [...elements];
// 	}

// 	get size() {
// 		return this.#elements.length;
// 	}

// 	isEmpty() {
// 		return this.size === 0;
// 	}

// 	enqueue(element) {
// 		if (arguments.length !== 0) return this.#elements.push(element);
// 		return this;
// 	}

// 	dequeue() {
// 		return this.#elements.shift();
// 	}
// }

// const maxDepth = root => {
// 	let count = -1;

// 	levelOrderTraverse(root, callback, count);

// 	return count;
// };

// const levelOrderTraverse = (root, callback, count) => {
// 	let node = null;
// 	let q = new Queue();

// 	q.enqueue(root);
// 	while (!q.isEmpty()) {
// 		node = q.dequeue();
// 		console.log(q.dequeue());

// 		if (node.left !== null) {
// 			q.enqueue(node.left);
// 		}

// 		if (node.right !== null) {
// 			q.enqueue(node.right);
// 		}

// 		count += 1;
// 	}
// };
