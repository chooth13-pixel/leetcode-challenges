// Dynamic Programming 
// Title: 1312. Minimum Insertion Steps to Make a String Palindrome 
// Problem Link: https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Hard
// Time O(n^2) Space O(n)

function minInsertions(s: string): number {
    let n = s.length
    let prev: number[] = new Array(n + 1).fill(0)
    let curr: number[] = new Array(n + 1).fill(0)

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (s[i] === s[n - j - 1]) {
                curr[j + 1] = 1 + prev[j]
            } else {
                curr[j + 1] = Math.max(prev[j + 1], curr[j])
            }
        }
        prev = curr
        curr = new Array(prev.length).fill(0)
    }
    return n - prev[prev.length - 1]
};
