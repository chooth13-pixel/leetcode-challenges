// Data Stream Processing 
// Title: Q1. Kth Largest Element in a Stream
// Problem Link: https://leetcode.com/problems/kth-largest-element-in-a-stream/description/?envType=problem-list-v2&envId=ssd-ssd2-data-stream-processing
// Difficulty: Easy
// Time O(n x log(k)) Space O(k) where n is the number of add calls

class KthLargest {
    minPQ: MinPriorityQueue<number>;
    k: number;
    constructor(k: number, nums: number[]) {
        this.minPQ = new MinPriorityQueue();
        this.k = k;
        for (const num of nums) {
            this.minPQ.enqueue(num);
            if (this.minPQ.size() > this.k) {
                this.minPQ.dequeue();
            }
        }
    }

    add(val: number): number {
        this.minPQ.enqueue(val);
        if (this.minPQ.size() > this.k) {
            this.minPQ.dequeue();
        }
        return this.minPQ.front();
    }
}
