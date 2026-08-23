// Title: 3622. Check Divisibility by Digit Sum and Product 
// Problem Link: https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/description/ 
// Difficulty: Easy
// Time O(n) Space O(1)

class Solution {

    /**
     * @param Integer $n
     * @return Boolean
     */
    function checkDivisibility($n) {
        [$digitSum, $digitProd, $n2] = [0, 1, $n];
        while($n2 > 0){
            $digitSum += $n2 % 10;
            $digitProd *= $n2 % 10;
            $n2 = (int) ($n2/10);
        }
        $sum = $digitSum + $digitProd;
        return $n % $sum === 0;
    }
}
