// Dynamic Programming 
// Title: 300. Longest Increasing Subsequence 
// Problem Link: https://leetcode.com/problems/longest-increasing-subsequence/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n^2) Space O(n)

func lengthOfLIS(nums []int) int {
	var dp []int
	for _, num := range nums {
		i := slices.IndexFunc(dp, func(n int) bool {
			return num <= n
		})
		if i >= 0 {
			dp[i] = num
			continue
		}
		dp = append(dp, num)
	}
	return len(dp)
}
