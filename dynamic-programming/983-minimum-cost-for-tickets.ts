// Dynamic Programming 
// Title: 983. Minimum Cost For Tickets 
// Problem Link: https://leetcode.com/problems/minimum-cost-for-tickets/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n) Space O(n)

function mincostTickets(days: number[], costs: number[]): number {
    const dp = new Array(days[days.length - 1] + 1).fill(0)
    dp[1] = costs[0]
    let idx = 0
    for (let i = 1; i <= dp.length - 1; i++) {
        if (i === days[idx]) {
            dp[i] = dp[i - 1] + costs[0]
            if (days[idx] < 7) {
                dp[i] = Math.min(dp[i], costs[1])
            } else {
                dp[i] = Math.min(dp[i], dp[i - 7] + costs[1])
            }
            if (days[idx] < 30) {
                dp[i] = Math.min(dp[i], costs[2])
            } else {
                dp[i] = Math.min(dp[i], dp[i - 30] + costs[2])
            }
            idx++
        } else {
            dp[i] = dp[i - 1]
        }
    }
    return dp[dp.length - 1]
};
