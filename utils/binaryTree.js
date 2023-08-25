class Node {
	constructor(value = 0) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class Queue {
	#elements = [];

	constructor(elements = []) {
		if (!Array.isArray(elements)) throw new TypeError(`${elements} is not an Array`);
		this.#elements = [...elements];
	}

	get size() {
		return this.#elements.length;
	}

	isEmpty() {
		return this.size === 0;
	}

	enqueue(element) {
		if (arguments.length !== 0) this.#elements.push(element);
		return this;
	}

	dequeue() {
		return this.#elements.shift();
	}
}

class BinaryTree {
	constructor() {
		this.root = null;
	}

	#_insertNode(node, value) {
		if (node === null) {
			node = new Node(value);
		} else if (value < node.value) {
			node.left = this.#_insertNode(node.left, value);
		} else if (value > node.value) {
			node.right = this.#_insertNode(node.right, value);
		}

		return node;
	}

	#_preOrderTraverseNode(node, callback) {
		if (node === null) return;

		// preorder traversal private method -> N L R (callback left right)
		callback(node);
		this.#_preOrderTraverseNode(node.left, callback);
		this.#_preOrderTraverseNode(node.right, callback);
	}

	// inorder traversal private method-> L N R (left callback right)
	#_inOrderTraverseNode(node, callback) {
		if (node === null) return;

		this.#_inOrderTraverseNode(node.left, callback);
		callback(node);
		this.#_inOrderTraverseNode(node.right, callback);
	}

	// postorder traversal private method-> L R N (left right callback)
	#_postOrderTraverseNode(node, callback) {
		if (node === null) return;

		this.#_inOrderTraverseNode(node.left, callback);
		this.#_inOrderTraverseNode(node.right, callback);
		callback(node);
	}

	insert(value) {
		this.root = this.#_insertNode(this.root, value);
	}

	// N - L - R order
	preOrderTraverse(callback) {
		this.#_preOrderTraverseNode(this.root, callback);
	}

	// L - N - R order
	inOrderTraverse(callback) {
		this.#_inOrderTraverseNode(this.root, callback);
	}

	// L - R - N order
	postOrderTraverseNode(callback) {
		this.#_postOrderTraverseNode(this.root, callback);
	}

	// level Order
	levelOrderTraverseNode(callback) {
		let q = new Queue();
		let node = null;

		q.enqueue(this.root);

		while (!q.isEmpty()) {
			node = q.dequeue();
			callback(node);

			if (node.left !== null) {
				q.enqueue(node.left);
			}

			if (node.right !== null) {
				q.enqueue(node.right);
			}
		}
	}
}

let bt = new BinaryTree();

const printNode = node => {
	process.stdout.write(`${node.value} -> `);
};

bt.insert(2);
bt.insert(1);
bt.insert(3);
bt.insert(5);
bt.insert(4);
bt.insert(8);
bt.insert(7);
bt.insert(6);

console.log(bt);
//		2
//	1		3
//				5
// 			4		8
// 				7
// 			6

console.log('#preOrder');
bt.preOrderTraverse(printNode);
console.log('end\n');

console.log('#inOrder');
bt.inOrderTraverse(printNode);
console.log('end\n');

console.log('#postOrder');
bt.postOrderTraverseNode(printNode);
console.log('end\n');

console.log('#levelOrder');
bt.levelOrderTraverseNode(printNode);
console.log('end\n');
