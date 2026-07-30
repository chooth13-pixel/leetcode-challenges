// Heap 
// Title: Q1. Last Stone Weight 
// Problem Link: https://leetcode.com/problems/last-stone-weight/?envType=problem-list-v2&envId=dsa-sequence-valley-heap 
// Difficulty: Easy 
// Time O(n) Space O(n)

import pq "github.com/emirpasic/gods/v2/queues/priorityqueue"

func byPriority(a, b int) int {
	return b - a
}

func lastStoneWeight(stones []int) int {
	queue := pq.NewWith(byPriority)
	for _, stone := range stones {
		queue.Enqueue(stone)
	}
	for queue.Size() > 1 {
		first, _ := queue.Dequeue()
		second, _ := queue.Dequeue()
		if first > second {
			queue.Enqueue(first - second)
		}
	}
	if queue.Size() == 1 {
		next, _ := queue.Dequeue()
		return next
	}
	return 0
}
