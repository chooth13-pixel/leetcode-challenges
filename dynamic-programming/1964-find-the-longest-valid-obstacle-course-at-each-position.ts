// Dynamic Programming 
// Title: 1964. Find the Longest Valid Obstacle Course at Each Position 
// Problem Link: https://leetcode.com/problems/find-the-longest-valid-obstacle-course-at-each-position/description/?envType=study-plan-v2&envId=dynamic-programming
// Difficulty: Hard
// Time O(n x log(n)) Space O(n)

function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
    const longests = Array(obstacles.length);
    const dp = [];
    for (let i = 0; i < obstacles.length; i++) {
        const o = obstacles[i];
        const index = binarySearch(dp, o);
        if (index === dp.length) {
            dp.push(o);
            longests[i] = dp.length;
        } else {
            dp[index] = o;
            longests[i] = index + 1;
        }
    }
    return longests;
};

function binarySearch(nums: number[], target: number): number {
    let left = 0, right = nums.length;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] <= target) {
            if (mid + 1 === right) {
                left = right
            } else {
                left = mid;
            }
        } else {
            right = mid;
        }
    }
    return right;
}

