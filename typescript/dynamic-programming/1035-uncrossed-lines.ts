// Dynamic Programming 
// Title: 1035. Uncrossed Lines
// Problem Link: https://leetcode.com/problems/uncrossed-lines/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n x m) Space O(n) where n = nums1 length

function maxUncrossedLines(nums1: number[], nums2: number[]): number {
    let prev = new Array(nums1.length + 1).fill(0)
    let curr = new Array(nums1.length + 1).fill(0)

    for (let i = 0; i < nums2.length; i++) {
        for (let j = 0; j < nums1.length; j++) {
            if (nums2[i] === nums1[j]) {
                curr[j + 1] = prev[j] + 1
            } else {
                curr[j + 1] = Math.max(prev[j + 1], curr[j])
            }
        }
        prev = curr
        curr = new Array(nums1.length + 1).fill(0)
    }

    return prev[prev.length - 1]
};
