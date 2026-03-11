// Data Stream Processing 
// Title: Q3. Data Stream as Disjoint Intervals 
// Problem Link: https://leetcode.com/problems/data-stream-as-disjoint-intervals/description/?envType=problem-list-v2&envId=ssd-ssd2-data-stream-processing
// Difficulty: Hard
// Time O(n) Space O(n)

class SummaryRanges {
    datastore: number[]
    constructor() {
        this.datastore = new Array(10002).fill(0)
    }

    addNum(value: number): void {
        this.datastore[value] = 1
    }

    getIntervals(): number[][] {
        const intervals = []
        let temp = [-1, -1]
        for (let i = 0; i < this.datastore.length; i++) {
            if (this.datastore[i] === 1 && temp[0] < 0) {
                temp[0] = i
            } else if (this.datastore[i] === 0 && temp[0] >= 0) {
                temp[1] = i - 1
                intervals.push(temp)
                temp = [-1, -1]
            }
        }
        return intervals
    }
}
