// Title: 1926. Nearest Exit from Entrance in Maze 
// Problem Link: https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description
// Difficulty: Medium 
// Time O(m x n) Space O(m x n)

class Solution {

    /**
     * @param String[][] $maze
     * @param Integer[] $entrance
     * @return Integer
     */
    function nearestExit($maze, $entrance) {
        [$visited, $next] = [[],[]];
        $step = 0;
        [$r, $c] = $entrance;
        $next[$r][$c] = true;
        while (count($next) > 0){
            $new = [];
            foreach($next as $r => $cols) {
                foreach($cols as $c => $state) {
                    $visited[$r][$c] = true;

                    if (($r === 0 || $c === 0 
                    || $r === count($maze) - 1 
                    || $c === count($maze[0]) - 1) 
                    && [$r, $c] !== $entrance) 
                        return $step;
                    
                    if ($maze[$r][$c-1] === '.' && !$visited[$r][$c-1])
                        $new[$r][$c-1] = true;
                    if ($maze[$r][$c+1] === '.' && !$visited[$r][$c+1])
                        $new[$r][$c+1] = true;
                    if ($maze[$r-1][$c] === '.' && !$visited[$r-1][$c])
                        $new[$r-1][$c] = true;
                    if ($maze[$r+1][$c] === '.' && !$visited[$r+1][$c])
                        $new[$r+1][$c] = true;
                }
            }
            $next = $new;
            $step++;
        }
        return -1;
    }
}
