// Title: 1927. Sum Game 
// Problem Link: https://leetcode.com/problems/sum-game/description
// Difficulty: Medium 
// Time O(n) Space O(1)

class Solution
{
    public function sumGame(string $num): bool
    {
        $half = strlen($num) / 2;
        $difference = 0;
        $questionBalance = 0;

        for ($i = 0; $i < $half; ++$i) {
            $left = $num[$i];

            if ($left === '?') {
                $questionBalance--;
            } else {
                $difference += (int) $left;
            }

            $right = $num[$i + $half];

            if ($right === '?') {
                $questionBalance++;
            } else {
                $difference -= (int) $right;
            }
        }

        return $difference * 2 !== $questionBalance * 9;
    }
}
