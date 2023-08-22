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
const deleteDuplicates = head => {
	// 중복되어 있는 값은 연결을 끊어버리고 다음 Node와 연결하는 방식
	if (head === null) {
		return null;
	}

	let prev = head; // [1,1,2] -> prev.val = 1; (0번째 index -> 현재 연결리스트 상태의 첫번째 요소를 의미)
	let current = head.next; // [1,2] -> prev.val = 2; (0번째 index -> 현재 연결리스트 상태의 첫번째 요소를 의미)

	while (current) {
		if (prev.val === current.val) {
			prev.next = current.next;
			// e.g 첫 번째 단계
			// prev.next는 다음으로 연결할 대상을 결정하는 것 | [1,1,2] 를 [2]와 연결하려는 것을 의미
			// current.next는 현재 [1,2]에서 [2]로 연결할 대상을 바꾸는 것을 의미
		} else {
			prev = prev.next;
		}

		current = current.next;
	}

	return head;

	// 중복되어 있는 값은 삭제해버리고 앞 Node와 뒷 Node을 연결하는 방식

	// if(head === null) {
	//     return null;
	// }

	// while(list.next !== null){
	//     let prev = list.val;
	//     let current = list.next.val;

	//     if(prev === current){
	//         let twoStepNext = list.next.next;
	//         let deleteTarget = list.next;
	//         delete(deleteTarget);

	//         console.log('head', head);
	//         console.log('list',list)

	//         list.next = twoStepNext;
	//     } else {
	//         list = list.next;
	//         console.log('else head', head);
	//         console.log('else list', list);
	//     }

	// }
	// return head;
};
