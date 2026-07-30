// Queue 
// Title: Q1. Number of Students Unable to Eat Lunch 
// Problem Link: https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/?envType=problem-list-v2&envId=dsa-sequence-valley-queue 
// Difficulty: Easy 
// Time O(n) Space O(1)

func countStudents(students []int, sandwiches []int) int {
	pref := [2]int{}

	for _, s := range students {
		pref[s]++
	}

	for _, s := range sandwiches {
		if pref[s] == 0 {
			return pref[0] + pref[1]
		}
		pref[s]--
	}
	return 0
}
