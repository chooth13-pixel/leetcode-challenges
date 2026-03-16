// Dynamic Programming 
// Title: 354. Russian Doll Envelopes 
// Problem Link: https://leetcode.com/problems/russian-doll-envelopes/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Hard
// Time O(n x log(n)) Space O(n)

function maxEnvelopes(envelopes: number[][]): number {
    let e = envelopes
    e.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0]
        if (a[0] === b[0]) return b[1] - a[1]
    })
    const dp = [e[0][1]]
    for (let i = 1; i < e.length; i++) {
        if (e[i][1] > dp[dp.length - 1]) {
            dp.push(e[i][1])
        } else {
            dp[replaceIdx(dp, e[i][1])] = e[i][1]
        }
    }
    return dp.length
};

function replaceIdx(arr, target): number {
    let left = 0, right = arr.length

    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    return left
}
