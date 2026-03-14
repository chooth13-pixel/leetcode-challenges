// Comprehensive Data Operations Simulation  
// Title: Q1. Range Module 
// Problem Link: https://leetcode.com/problems/range-module/description/?envType=problem-list-v2&envId=ssd-ssd5-comprehensive-data-operations-simulation 
// Difficulty: Hard
// Time O(n) Space O(n)

class RangeData extends DoublyLinkedListNode {
    val: number;
    isStart: boolean;

    constructor(val: number, isStart: boolean) {
        super();
        this.val = val;
        this.isStart = isStart;
    }

    getPrev() {
        return super.getPrev() as RangeData
    }
    getNext() {
        return super.getNext() as RangeData
    }
}

class RangeModule {
    rangeDb: DoublyLinkedList<RangeData>

    constructor() {
        this.rangeDb = new DoublyLinkedList<RangeData>();
    }

    addRange(left: number, right: number): void {
        if (this.rangeDb.count() === 0) {
            this.rangeDb.insertFirst(new RangeData(left, true))
            this.rangeDb.insertLast(new RangeData(right, false))
        } else {
            if (left > this.rangeDb.tail().val) {
                this.rangeDb.insertLast(new RangeData(left, true))
                this.rangeDb.insertLast(new RangeData(right, false))
            } else {
                let leftPos = 0, pos = 1, curr = this.rangeDb.head()
                while (curr) {
                    if (left > curr.val) {
                        leftPos = pos
                    } else if (left < curr.val && pos - leftPos === 1 && curr.isStart) {
                        if (right < curr.val) {
                            this.rangeDb.insertBefore(new RangeData(left, true), curr)
                            this.rangeDb.insertBefore(new RangeData(right, false), curr)
                            break
                        } else {
                            curr.val = left
                        }
                    }
                    if (right >= curr.val && pos - leftPos >= 2 && curr.isStart) {
                        this.rangeDb.remove(curr.getPrev())
                        curr = curr.getNext()
                        pos++
                        this.rangeDb.remove(curr.getPrev())
                        continue
                    } else if (right < curr.val) {
                        if (pos - leftPos >= 2 && curr.isStart) {
                            curr.getPrev().val = right
                        }
                        break
                    }
                    curr = curr.getNext()
                    pos++
                }

                if (right > this.rangeDb.tail().val) {
                    this.rangeDb.tail().val = right
                }
            }
        }
    }

    queryRange(left: number, right: number): boolean {
        let leftPos = 0, pos = 1, curr = this.rangeDb.head()
        while (curr) {
            if (left < curr.val && curr.isStart) {
                return false
            }
            if (right < curr.val && curr.isStart) {
                return false
            }
            if (!curr.isStart && left >= curr.getPrev().val && right > curr.getPrev().val && left < curr.val && right <= curr.val) {
                return true
            }
            curr = curr.getNext()
        }
        return false
    }

    removeRange(left: number, right: number): void {
        if (this.rangeDb.count() === 0) return
        if (left <= this.rangeDb.head().val && right >= this.rangeDb.tail().val) {
            this.rangeDb.clear()
        } else {
            let leftPos = 0, pos = 1, curr = this.rangeDb.head()
            while (curr) {
                if (left > curr.val) {
                    leftPos = pos
                } else if (left < curr.val && pos - leftPos === 1 && !curr.isStart) {
                    if (left > curr.getPrev().val && right < curr.val) {
                        this.rangeDb.insertBefore(new RangeData(left, false), curr)
                        this.rangeDb.insertBefore(new RangeData(right, true), curr)
                        break
                    } else if (curr.getPrev().val < left) {
                        curr.val = left
                    }
                }
                if (right >= curr.val && pos - leftPos >= 2 && !curr.isStart) {
                    this.rangeDb.remove(curr.getPrev())
                    curr = curr.getNext()
                    pos++
                    if (curr) {
                        this.rangeDb.remove(curr.getPrev())
                    } else {
                        this.rangeDb.removeLast()
                    }
                    continue
                } else if (right < curr.val) {
                    if (!curr.isStart) {
                        curr.getPrev().val = right
                    }
                    break
                }
                curr = curr.getNext()
                pos++
            }
        }
    }
}
