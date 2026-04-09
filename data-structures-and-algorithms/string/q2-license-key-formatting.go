// String 
// Title: Q2. License Key Formatting 
// Problem Link: https://leetcode.com/problems/license-key-formatting/description/?envType=problem-list-v2&envId=dsa-sequence-valley-string 
// Difficulty: Easy 
// Time O(n) Space O(n)

func licenseKeyFormatting(s string, k int) string {
    letterCount := 0
    for _, c := range s {
        if c != '-' {
            letterCount++
        }
    }
    groupLen := letterCount % k
    if groupLen == 0 {
        groupLen = k
    }

    var builder strings.Builder
    builder.Grow(letterCount + letterCount / k)
    for i := range s {
        c := s[i]
        if c == '-' {
            continue
        }
        if groupLen == 0 {
            groupLen = k
            builder.WriteByte('-')
        }
        if 'a' <= c && c <= 'z' {
            c = c - 'a' + 'A'
        }
        builder.WriteByte(c)
        groupLen--
    }
    return builder.String()
}
