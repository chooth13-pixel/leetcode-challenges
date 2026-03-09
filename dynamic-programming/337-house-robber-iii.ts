// Dynamic Programming 
// Title: 337. House Robber III 
// Problem Link: https://leetcode.com/problems/house-robber-iii/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n) Space O(1)

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

function rob(root: TreeNode | null): number {
    const result = dfs(root)
    return Math.max(result[0], result[1])
};

function dfs(node: TreeNode | null): number[] {
    if (node === null) return [0, 0]
    const left = dfs(node.left)
    const right = dfs(node.right)
    return [Math.max(left[0], left[1]) + Math.max(right[0], right[1]), left[0] + right[0] + node.val]
}
