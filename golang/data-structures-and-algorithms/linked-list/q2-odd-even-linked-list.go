// Linked List 
// Title: Q2. Odd Even Linked List 
// Problem Link: https://leetcode.com/problems/odd-even-linked-list/description/?envType=problem-list-v2&envId=dsa-association-slope-linked-list 
// Difficulty: Medium
// Time O(n) Space O(1)

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func oddEvenList(head *ListNode) *ListNode {
	if head == nil || head.Next == nil {
		return head
	}
    evenHead := head.Next
    oddCurr, evenCurr := head, evenHead
    for evenCurr.Next != nil {
        oddCurr.Next = evenCurr.Next
        oddCurr = oddCurr.Next
        evenCurr.Next = oddCurr.Next
        evenCurr = evenCurr.Next
        if evenCurr == nil {
            break
        }
    }
    oddCurr.Next = evenHead
    return head
}
