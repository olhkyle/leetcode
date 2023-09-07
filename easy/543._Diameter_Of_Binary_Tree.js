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

// DFS - 깊이 우선 탐색 : dfs(left) -> dfs(right)
const diameterOfBinaryTree = root => {
	let maxDiameter = 0;

	const dfs = node => {
		if (node === null) return 0;

		let left = dfs(node.left);
		let right = dfs(node.right);

		maxDiameter = Math.max(maxDiameter, left + right);

		return Math.max(left, right) + 1;
	};

	dfs(root);

	return maxDiameter;
};
