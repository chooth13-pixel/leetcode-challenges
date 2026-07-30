// Dynamic Programming 
// Title: 95. Unique Binary Search Trees II
// Problem Link: https://leetcode.com/problems/unique-binary-search-trees-ii/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n^2) Space O(n)

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function generateTrees(n: number): Array<TreeNode | null> {
    const memo = new Map<string, Array<TreeNode | null>>()
    return dfs(1, n, memo)
};

function dfs(start, end, memo): Array<TreeNode | null> {
    if (start > end) return [null]
    if (memo.has(`${start},${end}`)) return memo.get(`${start},${end}`)
    const nodes = []
    for (let i = start; i <= end; i++) {
        const lefts = dfs(start, i - 1, memo)
        const rights = dfs(i + 1, end, memo)
        for (const left of lefts) {
            for (const right of rights) {
                const node = new TreeNode(i, left, right)
                nodes.push(node)
            }
        }
    }
    memo.set(`${start},${end}`, nodes)
    return nodes
}
