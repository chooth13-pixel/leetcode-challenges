// Sorting 
// Title: Q2. Reduction Operations to Make the Array Elements Equal
// Problem Link: https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/description/?envType=problem-list-v2&envId=dsa-sorting-plateau-sorting
// Difficulty: Medium 
// Time O(n) Space O(n)

func reductionOperations(nums []int) int {
	maxN := 0
    for _, n := range nums {
		maxN = max(maxN, n)
	}
    freq := make([]int, maxN+1)
	for _, n := range nums {
		freq[n]++
	}
	total, op := 0, 0
	for _, count := range freq {
		total += op * count
		if count > 0 {
			op++
		}
	}
	return total
}
