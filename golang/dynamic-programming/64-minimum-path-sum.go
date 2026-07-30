// Dynamic Programming 
// Title: 64. Minimum Path Sum 
// Problem Link: https://leetcode.com/problems/minimum-path-sum/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(m x n) Space O(n)

func minPathSum(grid [][]int) int {
	prev := grid[0]
	for i := 1; i < len(grid[0]); i++ {
		prev[i] += prev[i-1]
	}
	for i := 1; i < len(grid); i++ {
		curr := grid[i]
		curr[0] += prev[0]
		for j := 1; j < len(grid[0]); j++ {
			curr[j] += int(math.Min(float64(prev[j]), float64(curr[j-1])))
		}
		prev = curr
	}
	return prev[len(prev)-1]
}
