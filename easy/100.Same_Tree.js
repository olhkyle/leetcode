/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = (p, q) => {
	const pResult = [];
	const qResult = [];

	const preOrderTraverse = (node, callback) => {
		_preOrderTraverse(node, callback);
	};

	const _preOrderTraverse = (node, callback) => {
		if (node === null) {
			callback({ val: undefined });
			return;
		}

		callback(node);
		_preOrderTraverse(node.left, callback);
		_preOrderTraverse(node.right, callback);
	};

	preOrderTraverse(p, node => pResult.push(node.val));
	preOrderTraverse(q, node => qResult.push(node.val));

	return pResult.every((item, idx) => item === qResult[idx]);

	// JSON.stringify
	// return JSON.stringify(p)===JSON.stringify(q)
};
