// Array I 
// Title: Q2. Shuffle the Array 
// Problem Link: https://leetcode.com/problems/shuffle-the-array/description/?envType=problem-list-v2&envId=dsa-linear-shoal-array-i
// Difficulty: Easy 
// Time O(n) Space O(n)

func shuffle(nums []int, n int) []int {
	arr := []int{}
	for i := 0; i < n; i++ {
		arr = append(arr, nums[i])
		arr = append(arr, nums[n+i])
	}
	return arr
}
