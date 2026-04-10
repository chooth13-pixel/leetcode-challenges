// String Matching 
// Title: Q1. Repeated Substring Pattern 
// Problem Link: https://leetcode.com/problems/repeated-substring-pattern/description/?envType=problem-list-v2&envId=dsa-sequence-valley-string-matching 
// Difficulty: Easy 
// Time O(n^2) Space O(1)

func repeatedSubstringPattern(s string) bool {
outer:
	for i := 1; i <= len(s)/2; i++ {
		if len(s)%i == 0 {
			for j := 0; (j*i)+i <= len(s); j++ {
				if s[j*i:(j*i)+i] != s[0:i] {
					continue outer
				}
			}
			return true
		}
	}
	return false
}
