// Hash 
// Title: Q2. Copy List with Random Pointer 
// Problem Link: https://leetcode.com/problems/copy-list-with-random-pointer/description/?envType=problem-list-v2&envId=dsa-association-slope-hash
// Difficulty: Medium
// Time O(n) Space O(n)

/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Next *Node
 *     Random *Node
 * }
 */

func copyRandomList(head *Node) *Node {
	hash := make(map[*Node]*Node)
	curr := head
	for curr != nil {
		hash[curr] = &Node{Val: curr.Val}
		curr = curr.Next
	}
	curr = head
	for curr != nil {
		copy := hash[curr]
		copy.Next = hash[curr.Next]
		copy.Random = hash[curr.Random]
		curr = curr.Next
	}
	return hash[head]
}
