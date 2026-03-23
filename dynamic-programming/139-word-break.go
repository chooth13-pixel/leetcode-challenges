// Dynamic Programming 
// Title: 139. Word Break 
// Problem Link: https://leetcode.com/problems/word-break/description/?envType=study-plan-v2&envId=dynamic-programming 
// Difficulty: Medium
// Time O(n^2) Space O(n)

func wordBreak(s string, wordDict []string) bool {
	wordSet := make(map[string]bool)
	for _, word := range wordDict {
		wordSet[word] = true
	}
	dp := make([]bool, len(s)+1)
	dp[0] = true
	for i := 0; i < len(s); i++ {
		if !dp[i] {
			continue
		}
		for j := i + 1; j <= len(s); j++ {
			if wordSet[string(s[i:j])] {
				dp[j] = true
			}
		}
	}
	return dp[len(s)]
}
