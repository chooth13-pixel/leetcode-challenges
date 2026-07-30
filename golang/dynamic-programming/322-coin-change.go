// Dynamic Programming 
// Title: 322. Coin Change 
// Problem Link: https://leetcode.com/problems/coin-change/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n x m) Space O(n) where n = amount, m = coins length

func coinChange(coins []int, amount int) int {
	dp := make([]int, amount+1)
	for i := 1; i <= amount; i++ {
		dp[i] = 10000
		for _, coin := range coins {
			if i >= coin {
				dp[i] = minInt(dp[i], dp[i-coin]+1)
			}
		}
	}
	if dp[len(dp)-1] > amount {
		return -1
	}
	return dp[len(dp)-1]
}

func minInt(a, b int) int {
	if a < b {
		return a
	}
	return b
}
