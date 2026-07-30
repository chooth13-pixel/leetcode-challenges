// Dynamic Programming 
// Title: 1027. Longest Arithmetic Subsequence
// Problem Link: https://leetcode.com/problems/longest-arithmetic-subsequence/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n ^ 2) Space O(n)

function longestArithSeqLength(nums: number[]): number {
    const dp = new Array(nums.length).fill(0).map(() => new Array(1001).fill(1))
    let max = 0
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const diff = nums[i] - nums[j] + 500
            dp[i][diff] = dp[j][diff] + 1
            max = Math.max(max, dp[i][diff])
        }
    }
    return max
};


