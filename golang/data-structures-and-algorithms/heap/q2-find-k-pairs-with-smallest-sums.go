// Heap 
// Title: Q2. Find K Pairs with Smallest Sums 
// Problem Link: https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/?envType=problem-list-v2&envId=dsa-sequence-valley-heap 
// Difficulty: Medium
// Time O(k) Space O(k)

import pq "github.com/emirpasic/gods/v2/queues/priorityqueue"

func byPriority(a, b interface{}) int {
	return a.([]int)[0] - b.([]int)[0]
}

func kSmallestPairs(nums1 []int, nums2 []int, k int) [][]int {
	out := [][]int{}
	queue := pq.NewWith(byPriority)
	for j, n2 := range nums2 {
		if queue.Size() == k {
			break
		}
		queue.Enqueue([]int{nums1[0] + n2, 0, j})
	}
	for len(out) < k {
		top, _ := queue.Dequeue()
		i, j := top.([]int)[1], top.([]int)[2]
		out = append(out, []int{nums1[i], nums2[j]})
		if i+1 < len(nums1) {
			queue.Enqueue([]int{nums1[i+1] + nums2[j], i + 1, j})
		}
	}
	return out
}
