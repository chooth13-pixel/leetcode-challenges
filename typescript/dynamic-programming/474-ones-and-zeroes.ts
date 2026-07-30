// Dynamic Programming 
// Title: 474. Ones and Zeroes 
// Problem Link: https://leetcode.com/problems/ones-and-zeroes/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n x m x k) Space O(n x m), where k is strs length

function findMaxForm(strs: string[], m: number, n: number): number {
    let dp = new Array(m + 1).fill(0).map(() => new Uint8Array(n + 1).fill(0))
    for (let i = 0; i < strs.length; i++) {
        const countedData = getDataCount(strs[i])
        for (let j = m; j >= countedData[0]; j--) {
            for (let k = n; k >= countedData[1]; k--) {
                dp[j][k] = Math.max(dp[j][k], dp[j - countedData[0]][k - countedData[1]] + 1)
            }
        }
    }
    return dp[m][n]
};

function getDataCount(str: string): number[] {
    let zero = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "0") {
            zero++;
        }
    }
    return [zero, str.length - zero];
}
