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
            $this->dfs($i, $isConnected, $visited);
            $provinces++;
        }
        return $provinces;
    }

     function dfs(int $i, array $isConnected, array &$visited){
        if (empty($visited[$i])){
            $visited[$i] = true;
        }
        foreach($isConnected[$i] as $j => $edge){
            if ($edge === 0 || $visited[$j]) continue;
            $this->dfs($j, $isConnected, $visited);
        }
    }
}

