// Stack 
// Title: Q1. Build an Array With Stack Operations
// Problem Link: https://leetcode.com/problems/build-an-array-with-stack-operations/description/?envType=problem-list-v2&envId=dsa-linear-shoal-stack
// Difficulty: Medium
// Time O(n) Space O(n) where n = target length

func buildArray(target []int, n int) []string {
	ops := []string{}
	i, j := 0, 1
	for i < len(target) {
		if target[i] == j {
			ops = append(ops, "Push")
			i++
		} else {
			ops = append(ops, "Push", "Pop")
		}
		j++
	}
	return ops
}
