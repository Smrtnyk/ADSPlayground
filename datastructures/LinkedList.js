class Node {
	constructor(val) {
		this.val = val
		this.next = null
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	push(val) {
		const newNode = new Node(val)

		if(!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}

		this.length++
		return this
	}

	pop() {
		if(!this.head) return undefined

		let current = this.head
		let newTail = current

		while(current.next) {
			newTail = current
			current = current.next
		}

		this.tail = newTail
		this.tail.next = null
		this.length--

		if(this.length === 0) {
			this.head = null
			this.tail = null
		}

		return current
	}

	shift() {
		if(!this.head) return undefined

		let currentHead = this.head
		this.head = currentHead.next
		this.length--

		if(this.length === 0) {
			this.tail = null
		}

		return currentHead
	}

	unshift(val) {
		const newNode = new Node(val)

		if(!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head = newNode
		}
		
		this.length++

		return this
	}

	get(index) {
		if(index < 0 || index >= this.length) return undefined

		let count = 0
		let current = this.head

		while(count !== index) {
			current = current.next
			count ++
		}

		return current
	}

	set(index, val) {
		const foundNode = this.get(index)
		if(foundNode) {
			foundNode.val = val
			return true
		}

		return false
	}

	insert(index, val) {
		if(index < 0 || index > this.length) return false
		if(index === this.length) return !!this.push(val)
		if(index === 0) return !!this.unshift(val)

		const newNode = new Node(val)
		const prev = this.get(index - 1)

		newNode.next = prev.next
		prev.next = newNode

		this.length++

		return true
	}

	remove(index) {
		if(index < 0 || index >= this.length) return false
		if(index === 0) return this.shift()
		if(index === this.length - 1) return this.pop()
		
		const prevNode = this.get(index - 1)
		const removed = prevNode.next

		prevNode.next = removed.next

		this.length--

		return removed
	}
}

const list = new SinglyLinkedList()
list.push(1)
list.push(2)
list.push(3)
//list.unshift(4)
//console.log(list.get(3))
//console.log(list.set(3, 159))
console.log(list.insert(1, 100))
//console.log(list.get(1))
//console.log(list.get(2))

console.log(list.remove(1))

console.log(list)