// Dynamic Programming 
// Title: 646. Maximum Length of Pair Chain 
// Problem Link: https://leetcode.com/problems/maximum-length-of-pair-chain/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n x log(n)) Space O(1)

func findLongestChain(pairs [][]int) int {
	slices.SortFunc(pairs, func(a, b []int) int {
		return a[1] - b[1]
	})
	max := 1
	curr := pairs[0]
	for i := 1; i < len(pairs); i++ {
		if curr[1] < pairs[i][0] {
			curr = pairs[i]
			max++
		}
	}
	return max
}
