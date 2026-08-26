// Title: 802. Find Eventual Safe States
// Problem Link: https://leetcode.com/problems/find-eventual-safe-states/description
// Difficulty: Medium 
// Time O(n^2) Space O(n)

class Solution {

    /**
     * @param Integer[][] $graph
     * @return Integer[]
     */
    function eventualSafeNodes($graph) {
        [$visited, $safe] = [[],[]];
        foreach ($graph as $i => $edges){
            if ($visited[$i]) continue;
            $this->dfs($i, $graph, $visited, $safe);
        }
        sort($safe);
        return $safe;
    }

    private function dfs(int $i, array $graph, array &$visited, array &$safe): void{
        if (empty($visited[$i])) $visited[$i] = true;
        if (count($graph[$i]) === 0) {
            $safe[] = $i;
            return;
        }
        foreach($graph[$i] as $j => $edge){
            if ($visited[$edge]) continue;
            $this->dfs($edge, $graph, $visited, $safe);
        }
        $isAllSafeEdges = true;
        foreach($graph[$i] as $j => $edge){
            if (!in_array($edge, $safe)) $isAllSafeEdges = false;
        }
        if ($isAllSafeEdges) $safe[] = $i;
    }
}
