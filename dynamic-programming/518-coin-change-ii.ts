// Dynamic Programming 
// Title: 518. Coin Change II 
// Problem Link: https://leetcode.com/problems/coin-change-ii/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n x m) Space O(n) where n is the amount and m is the number of coins

function change(amount: number, coins: number[]): number {
    let prev = new Array(amount + 1).fill(0)
    let curr = new Array(amount + 1).fill(0)
    prev[0] = 1

    for (let j = 0; j < coins.length; j++) {
        for (let i = 0; i <= amount; i++) {
            curr[i] = prev[i]
            if (i >= coins[j]) {
                curr[i] += curr[i - coins[j]]
            }
        }
        prev = curr
        curr = new Array(amount + 1).fill(0)
    }

    return prev[prev.length - 1]
};
