// String Matching 
// Title: Q3. Repeated String Match 
// Problem Link: https://leetcode.com/problems/repeated-string-match/description/?envType=problem-list-v2&envId=dsa-sequence-valley-string-matching 
// Difficulty: Medium
// Time O(n) Space O(n)

func repeatedStringMatch(a string, b string) int {
	count := len(b) / len(a)
	if len(b)%len(a) > 0 {
		count++
	}
	var sb strings.Builder
	for range count {
		sb.WriteString(a)
	}
	if strings.Contains(sb.String(), b) {
		return count
	}
	sb.WriteString(a)
	if strings.Contains(sb.String(), b) {
		return count + 1
	}
	return -1
}
