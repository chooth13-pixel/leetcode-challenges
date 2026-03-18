// Dynamic Programming 
// Title: 188. Best Time to Buy and Sell Stock IV
// Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Hard 
// Time O(n x k) Space O(k)

func maxProfit(k int, prices []int) int {
	starts := make([]int, k)
	profits := make([]int, k)
	for j := 0; j < k; j++ {
		starts[j] = -prices[0]
	}
	for i := 1; i < len(prices); i++ {
		starts[0] = maxInt(starts[0], -prices[i])
		profits[0] = maxInt(profits[0], starts[0]+prices[i])
		for j := 1; j < k; j++ {
			starts[j] = maxInt(starts[j], profits[j-1]-prices[i])
			profits[j] = maxInt(profits[j], starts[j]+prices[i])
		}
	}
	return profits[k-1]
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}
