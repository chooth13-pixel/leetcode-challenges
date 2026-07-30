// Linked List 
// Title: Q1. Remove Duplicates from Sorted List 
// Problem Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/?envType=problem-list-v2&envId=dsa-association-slope-linked-list 
// Difficulty: Easy
// Time O(n) Space O(1)

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    if head == nil {
        return head
    }
    prev := head
    for prev.Next != nil {
        curr := prev.Next
        if curr.Val == prev.Val {
            prev.Next = curr.Next
        } else {
            prev = curr
        }
    }
    return head
}
