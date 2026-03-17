// Comprehensive Data Operations Simulation  
// Title: Q2. Range Frequency Queries 
// Problem Link: https://leetcode.com/problems/range-frequency-queries/description/?envType=problem-list-v2&envId=ssd-ssd5-comprehensive-data-operations-simulation
// Difficulty: Medium 
// Time O(log(n)) Space O(n)

class RangeFreqQuery {
    numFreqMap: Map<number, number[]>
    constructor(arr: number[]) {
        this.numFreqMap = new Map()
        for (const [i, num] of arr.entries()) {
            if (!this.numFreqMap.has(num)) {
                this.numFreqMap.set(num, [i])
            } else {
                const arr = this.numFreqMap.get(num)
                arr.push(i)
            }
        }
    }

    query(left: number, right: number, value: number): number {
        if (!this.numFreqMap.has(value)) return 0
        const arr = this.numFreqMap.get(value)
        return this.findRightCount(arr, right) - this.findLeftCount(arr, left)
    }

    findLeftCount(arr: number[], pos: number): number {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (arr[mid] >= pos) right = mid;
            else left = mid + 1;
        }
        return left;
    }

    findRightCount(arr: number[], pos: number): number {
        let left = 0, right = arr.length;
        while (left < right) {
            const mid = Math.floor((left + right) / 2)
            if (pos < arr[mid]) right = mid;
            else left = mid + 1;
        }
        return left;
    }
}

