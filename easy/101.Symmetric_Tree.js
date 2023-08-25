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
 * @return {boolean}
 */
const isSymmetric = root => {
	if (root === null) return true;

	return _isSymmetric(root.left, root.right);
};

const _isSymmetric = (leftNode, rightNode) => {
	if (leftNode === null && rightNode === null) return true;

	if ((leftNode !== null && rightNode === null) || (leftNode === null && rightNode !== null)) return false;

	if (leftNode.val !== rightNode.val) return false;

	return _isSymmetric(leftNode.left, rightNode.right) && _isSymmetric(leftNode.right, rightNode.left);
};
