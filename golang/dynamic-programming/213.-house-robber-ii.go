// Dynamic Programming 
// Title: 213. House Robber II 
// Problem Link: https://leetcode.com/problems/house-robber-ii
// Difficulty: Medium
// Time O(n) Space O(1)

func rob(nums []int) int {
	n := len(nums)
	if n == 1 {
		return nums[0]
	}
	return max(robCircular(nums[:n-1]), robCircular(nums[1:n]))
}

func robCircular(nums []int) int {
	dp1, dp2 := 0, 0
	for _, v := range nums {
		dp1, dp2 = dp2, max(dp1+v, dp2)
	}
	return dp2
}
