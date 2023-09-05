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
 * @return {TreeNode}
 */
const invertTree = root => {
	const preOrderTraverse = (node, callback) => {
		_preOrderTraverse(node, callback);
	};

	const _preOrderTraverse = (node, callback) => {
		if (node === null) return;

		callback(node);
		_preOrderTraverse(node.left, callback);
		_preOrderTraverse(node.right, callback);
	};

	const callback = node => {
		[node.left, node.right] = [node.right, node.left];
	};

	preOrderTraverse(root, callback);
};

/**
 * left [7,6,9]
right [2,1,3]
left [9]
right [6]
left null
right null
left null
right null
left [3]
right [1]
left null
right null
left null
right null
 */
