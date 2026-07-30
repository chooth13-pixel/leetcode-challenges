// Dynamic Programming 
// Title: 123. Best Time to Buy and Sell Stock III 
// Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Hard 
// Time O(n) Space O(1)

func maxProfit(prices []int) int {
	firstStart, firstProfit := -prices[0], 0
	secondStart, secondProfit := -prices[0], 0
	for i := 1; i < len(prices); i++ {
		firstStart = maxInt(firstStart, -prices[i])
		firstProfit = maxInt(firstProfit, firstStart+prices[i])
		secondStart = maxInt(secondStart, firstProfit-prices[i])
		secondProfit = maxInt(secondProfit, secondStart+prices[i])
	}
	return secondProfit
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}
