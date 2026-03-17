// Dynamic Programming 
// Title: 790. Domino and Tromino Tiling 
// Problem Link: https://leetcode.com/problems/domino-and-tromino-tiling/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n) Space O(1)

// Great video that explains this problem by Techdose at https://www.youtube.com/watch?v=8q0CZ748pz4
function numTilings(n: number): number {
    const dp = [1, 1, 2]
    if (n < 3) return dp[n]
    for (let i = 3; i <= n; i++) {
        dp[3] = (dp[2] * 2 + dp[0]) % (1e9 +7)
        dp[0] = dp[1]
        dp[1] = dp[2]
        dp[2] = dp[3]
    }
    return dp[3] 
};
