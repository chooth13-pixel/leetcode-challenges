// Dynamic Programming 
// Title: 91. Decode Ways 
// Problem Link: https://leetcode.com/problems/decode-ways/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n) Space O(1)

func numDecodings(s string) int {
	dp := [2]int{1, 1}
	if s[0] == '0' {
		return 0
	}
	for i := 1; i < len(s); i++ {
		next := 0
		if (s[i-1] == '1' && s[i] > '0') || (s[i-1] == '2' && s[i] > '0' && s[i] <= '6') {
			next = dp[0] + dp[1]
		} else if s[i] == '0' {
			if s[i-1] != '1' && s[i-1] != '2' {
				return 0
			}
			next = dp[0]
		} else {
			next = dp[1]
		}
		dp[0], dp[1] = dp[1], next
	}
	return dp[1]
}
