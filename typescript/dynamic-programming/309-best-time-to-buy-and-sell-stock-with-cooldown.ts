// Dynamic Programming 
// Title: 309. Best Time to Buy and Sell Stock with Cooldown 
// Problem Link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n) Space O(1)

function maxProfit(prices: number[]): number {
    // [buy, hold, ignore, sell]
    let prev = [-prices[prices.length - 1], 0, 0, prices[prices.length - 1]]
    let curr = []

    for (let i = prices.length - 2; i >= 0; i--) {
        curr[0] = Math.max(prev[1], prev[3]) - prices[i]
        curr[1] = Math.max(prev[1], prev[3])
        curr[2] = Math.max(prev[2], prev[0])
        curr[3] = Math.max(prev[2]) + prices[i]
        prev = curr
        curr = []
    }
    return Math.max(prev[0], prev[2])
};
