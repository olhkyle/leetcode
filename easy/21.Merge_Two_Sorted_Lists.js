/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = (list1, list2) => {
	// linkedList
	const head = new ListNode(0);
	console.log(head);
	let mergedList = head;

	while (list1 && list2) {
		if (list1.val < list2.val) {
			mergedList.next = list1;
			console.log('list1', list1);

			list1 = list1.next;
			console.log('changed list1', list1);
		} else {
			mergedList.next = list2;
			console.log('list2', list2);

			list2 = list2.next;
			console.log('changed list2', list2);
		}

		mergedList = mergedList.next;
		console.log('mergedList', mergedList);
		console.log('head.next', head.next);
	}

	if (!list1) {
		mergedList.next = list2;
	}

	if (!list2) {
		mergedList.next = list1;
	}

	console.log('head.next', head.next);
	return head.next;
};

/**
 * [0]
list2 [1,3,4]
changed list2 [3,4]
mergedList [1,3,4]
head.next [1,3,4]
list1 [1,2,4]
changed list1 [2,4]
mergedList [1,2,4]
head.next [1,1,2,4]
list1 [2,4]
changed list1 [4]
mergedList [2,4]
head.next [1,1,2,4]
list2 [3,4]
changed list2 [4]
mergedList [3,4]
head.next [1,1,2,3,4]
list2 [4]
changed list2 null
mergedList [4]
head.next [1,1,2,3,4]
head.next [1,1,2,3,4,4]
 */

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
