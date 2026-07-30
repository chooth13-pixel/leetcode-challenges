// Dynamic Programming 
// Title: 70. Climbing Stairs 
// Problem Link: https://leetcode.com/problems/climbing-stairs/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Easy
// Time O(n) Space O(1)

func climbStairs(n int) int {
	dp := []int{1, 1}
	for i := 2; i <= n; i++ {
		dp = []int{dp[1], dp[0] + dp[1]}
	}
	return dp[1]
}
