/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = head => {
	let [prev, curr] = [null, head];
	//  1 2 3 4 5
	//    f
	//  p c
	//  2 1 3 4 5
	//      f
	//    p c
	//  3 2 1 4 5

	while (curr !== null) {
		const future = curr.next;
		curr.next = prev;
		prev = curr;
		curr = future;
		console.log(prev, curr, future);
	}

	return prev;
};
