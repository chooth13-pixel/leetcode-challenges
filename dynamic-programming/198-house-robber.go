// Dynamic Programming 
// Title: 198. House Robber
// Problem Link: https://leetcode.com/problems/house-robber/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Medium
// Time O(n) Space O(1)

func rob(nums []int) int {
	dp1, dp2 := 0, nums[0]

	for i := 1; i < len(nums); i++ {
		dp1, dp2 = dp2, max(dp1+nums[i], dp2)
	}
	return dp2
}
