class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	append(data) {
		let node = new Node(data);
		let current = null;

		if (!this.head) {
			this.head = node;
		} else {
			current = this.head;

			while (current.next) {
				current = current.next;
			}

			current.next = node; // 새로 들어온 data;
		}

		this.size += 1;
	}

	insertAt(data, position) {
		if (position < 0 || position > this.size) {
			return false;
		}

		let node = new Node(data);
		let current = this.head;

		let index = 0;
		let prev = null;

		if (position === 0) {
			this.head = node;
			node.next = current;
		} else {
			// position이 0이 아니고, 다른 자리에 끼워넣는 경우
			while (index < position) {
				index += 1;
				prev = current;
				current = current.next;
			}

			prev.next = node;
			node.next = current;
		}

		this.size += 1;
		return true;
	}

	remove(data) {
		let current = this.head;
		let prev = null;

		console.log('current', current);

		while (current.data !== data && current.next !== null) {
			prev = current;
			current = current.next;
		}

		// current.next가 null을 가리킬 때까지, current가 가리키는 Node가 끝까지 온 경우
		if (current.data !== data) {
			return null;
		}

		if (current === this.head) {
			console.log('current === this.head', current);
			prev.next = current.next;
		}

		this.size += 1;
		return current.data;
	}

	removeAt(position) {
		if (position < 0 && position > this.size) {
			return false;
		}

		let current = this.head; // Node { data: index 0의 data}
		let prev = null;
		let index = 0;

		// remove first Index;
		if (position === 0) {
			this.head = current.next;
		} else {
			while (index < position) {
				index += 1;
				prev = current;
				current = current.next;
			}

			prev.next = current.next;
		}

		this.size -= 1;
		return true;
	}

	clear() {
		this.head = null;
		this.size = 0;
	}

	printNode() {
		process.stdout.write('head -> ');
		for (let node = this.head; node !== null; node = node.next) {
			process.stdout.write(`${node.data} -> `);
		}
		console.log(null);
	}
}

const ll = new LinkedList();

console.log(ll.size, ll.head);

ll.append('123');
console.log(ll.size, ll.head);

ll.append('456');
console.log(ll.size, ll.head);

ll.append('789');
console.log(ll.size, ll.head);

ll.insertAt('-210', 0);
console.log('Size', ll.size, '&', ll.head);

ll.removeAt(1);

ll.printNode();
