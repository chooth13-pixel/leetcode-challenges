// Dynamic Programming 
// Title: 1218. Longest Arithmetic Subsequence of Given Difference 
// Problem Link: https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n) Space O(n)

function longestSubsequence(arr: number[], difference: number): number {
    let max = 1
    const dp = new Map<number, number>()
    dp.set(arr[0], 1)
    for (let i = 1; i < arr.length; i++) {
        if (dp.has(arr[i] - difference)) {
            const len = dp.get(arr[i] - difference) + 1
            if (!dp.has(arr[i]) || dp.get(arr[i]) < len) {
                dp.set(arr[i], len)
                max = Math.max(max, len)
            }
        } else {
            dp.set(arr[i], 1)
        }
    }
    return max
};
