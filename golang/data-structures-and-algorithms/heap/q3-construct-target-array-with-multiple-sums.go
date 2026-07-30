// Heap 
// Title: Q3. Construct Target Array With Multiple Sums 
// Problem Link: https://leetcode.com/problems/construct-target-array-with-multiple-sums/description/?envType=problem-list-v2&envId=dsa-sequence-valley-heap 
// Difficulty: Hard
// Time O(n x log(n)) Space O(n)

// great video explanation by Aditya https://www.youtube.com/watch?v=iZeCKyT6PMg

import pq "github.com/emirpasic/gods/v2/queues/priorityqueue"

func byPriority(a, b int) int {
	return b - a
}

func isPossible(target []int) bool {
	sum := 0
	maxHeap := pq.NewWith(byPriority)
	for _, t := range target {
		sum += t
		maxHeap.Enqueue(t)
	}

	top, _ := maxHeap.Peek()
	for top > 1 {
		largest, _ := maxHeap.Dequeue()
		sum -= largest
		if largest <= sum || sum == 0 {
			return false
		}
		largest %= sum
		if largest == 0 && sum > 1 {
			return false
		}
		maxHeap.Enqueue(largest)
		sum += largest
		top, _ = maxHeap.Peek()
	}
	return true
}
