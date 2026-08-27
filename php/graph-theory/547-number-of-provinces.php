// Title: 547. Number of Provinces
// Problem Link: https://leetcode.com/problems/number-of-provinces/description
// Difficulty: Medium 
// Time O(n^2) Space O(n)

class Solution {

    /**
     * @param Integer[][] $isConnected
     * @return Integer
     */
    function findCircleNum($isConnected) {
        $visited = [];
        $provinces = 0;

        foreach ($isConnected as $i => $edges){
            if ($visited[$i]) continue;
            $visited[$i] = true;
            $this->bfs($isConnected, $visited, $i);
            $provinces++;
        }

        return $provinces;
    }

    private function bfs(array $isConnected, array &$visited, int $node){
        $next = [$node];
        while (count($next) > 0){
            $key = array_rand($next);
            $node = $next[$key];
            foreach ($isConnected[$node] as $j => $edge){
                if ($edge === 1 && !$visited[$j]) {
                    $next[] = $j;  
                    $visited[$j] = true;
                } 
            }
            unset($next[$key]);
        }
    }
}

