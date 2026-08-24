// Title: 1927. Sum Game 
// Problem Link: https://leetcode.com/problems/sum-game/description
// Difficulty: Medium 
// Time O(n) Space O(n)

class Solution {

    /**
     * @param String $num
     * @return Boolean
     */
    function sumGame($num) {
        $sum = 0;
        $questPos = [];
        for ($i = 0; $i < strlen($num); $i++) {
            if ($i < strlen($num) / 2){
                $sum+=(int)$num[$i];
            } else {
                $sum-=(int)$num[$i];
            }
            if ($num[$i] === '?'){
                $questPos[] = $i;
            }
        }
        if(count($questPos) === 1){
            return true;
        }
        $questions = consolidateQuestion($questPos, strlen($num));
        $sum = updateSum($sum, $questions);
        return $sum !== 0;
    }
}

function updateSum(int $sum, array $questions): int {
    [$alice, $bob] = $questions;
    if ($alice > 0 && $alice * 9 > abs($sum)) {
        $sum += $alice * 9;
    }

    if ($alice < 0 && $sum < 0) {
        $sum += $alice * 9;
    }

    if ($bob > 0 && $sum < 0) {
        $sum += $bob * 9;
    }

    if ($bob < 0 && $sum <= abs($bob * 9)) {
        $sum += $bob * 9;
    }
    return $sum;
}

function consolidateQuestion(array $questPos, int $len): array {
    [$alice, $bob] = [0,0];
    foreach ($questPos as $i => $pos) {
        if ($pos < $len / 2){
            if ($i % 2 === 0){
                $alice++;
            } else {
                $bob++;
            }
        } else {
            if ($i % 2 === 0){
                $bob--;
            } else {
                $alice--;
            }
        }
    }
    return [$alice, $bob];
}
