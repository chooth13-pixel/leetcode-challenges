// Dynamic Programming 
// Title: 1143. Longest Common Subsequence
// Problem Link: https://leetcode.com/problems/longest-common-subsequence/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n x m) Space O(n) where n = text1 length, m = text2 length

function longestCommonSubsequence(text1: string, text2: string): number {
    let prev = new Array(text1.length + 1).fill(0)
    let curr = new Array(text1.length + 1).fill(0)

    for (let i = 0; i < text2.length; i++) {
        for (let j = 0; j < text1.length; j++) {
            curr[j + 1] = text1[j] === text2[i] ? prev[j] + 1 : Math.max(curr[j], prev[j + 1])
        }
        prev = curr
        curr = new Array(text1.length + 1).fill(0)
    }

    return prev[prev.length - 1]
};
