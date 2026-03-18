// Array II 
// Title: Q2. How Many Numbers Are Smaller Than the Current Number 
// Problem Link: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/?envType=problem-list-v2&envId=dsa-linear-shoal-array-ii 
// Difficulty: Easy 
// Time O(n) Space O(n)

func smallerNumbersThanCurrent(nums []int) []int {
	countArr := [101]int{}
	arr := make([]int, len(nums))
	for _, num := range nums {
		countArr[num]++
	}
	sum := 0
	for i, num := range countArr {
		countArr[i] = sum
		sum += num
	}
	for i, num := range nums {
		arr[i] = countArr[num]
	}
	return arr
}
