// Dynamic Programming 
// Title: 673. Number of Longest Increasing Subsequence 
// Problem Link: https://leetcode.com/problems/number-of-longest-increasing-subsequence/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n^2) Space O(n)

function findNumberOfLIS(nums: number[]): number {
    let maxLen = 1, maxCount = 1
    const lengthTable = new Array(nums.length).fill(1)
    const countTable = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        let prevMax = 0
        for (let j = i - 1; j >= 0; j--) {
            if (nums[j] < nums[i]) {
                if (lengthTable[j] > prevMax) {
                    prevMax = lengthTable[j]
                    countTable[i] = countTable[j]
                } else if (lengthTable[j] === prevMax) {
                    countTable[i] += countTable[j]
                }
            }
        }
        lengthTable[i] = prevMax + 1
        if (lengthTable[i] > maxLen) {
            maxLen = lengthTable[i]
            maxCount = countTable[i]
        } else if (lengthTable[i] === maxLen) {
            maxCount += countTable[i]
        }
    }
    return maxCount
};

