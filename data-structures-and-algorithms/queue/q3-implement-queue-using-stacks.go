// Queue 
// Title: Q3. Implement Queue using Stacks 
// Problem Link: https://leetcode.com/problems/implement-queue-using-stacks/description/?envType=problem-list-v2&envId=dsa-sequence-valley-queue
// Difficulty: Easy 
// Time O(1) for all methods, Space O(n)

type Node struct {
	val  int
	next *Node
}

type MyQueue struct {
	head *Node
	tail *Node
}

func Constructor() MyQueue {
	queue := MyQueue{head: nil, tail: nil}
	return queue
}

func (this *MyQueue) Push(x int) {
	node := &Node{val: x, next: nil}
	if this.head == nil {
		this.head = node
		this.tail = node
	} else {
		this.tail.next = node
		this.tail = node
	}
}

func (this *MyQueue) Pop() int {
	head := this.head
	this.head = head.next
	head.next = nil
	return head.val
}

func (this *MyQueue) Peek() int {
	return this.head.val
}

func (this *MyQueue) Empty() bool {
	return this.head == nil
}
