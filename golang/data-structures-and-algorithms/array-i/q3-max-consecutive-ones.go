// Array I 
// Title: Q3. Max Consecutive Ones 
// Problem Link: https://leetcode.com/problems/max-consecutive-ones/description/?envType=problem-list-v2&envId=dsa-linear-shoal-array-i 
// Difficulty: Easy 
// Time O(n) Space O(1)

func findMaxConsecutiveOnes(nums []int) int {
	count, max := 0, 0
	for _, num := range nums {
		if num == 1 {
			count++
			max = maxInt(max, count)
		} else {
			count = 0
		}
	}
	return max
}

func maxInt(a, b int) int {
	if a > b {
		return a
	}
	return b
}
