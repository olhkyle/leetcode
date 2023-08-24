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
 * @return {number[]}
 */
const inorderTraversal = root => {
	// root -> TreeNode { root : Node { value , left, right }}
	const result = [];

	const _inOrderTraverseNode = (node, callback) => {
		if (node === null) return;

		_inOrderTraverseNode(node.left, callback);
		callback(node);
		_inOrderTraverseNode(node.right, callback);
	};

	const callback = node => {
		result.push(node.val);
	};

	_inOrderTraverseNode(root, callback);

	return result;
};
