// Title: 1192. Critical Connections in a Network
// Problem Link: https://leetcode.com/problems/critical-connections-in-a-network/description
// Difficulty: Hard 
// Time O(n^2) Space O(n)

class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $connections
     * @return Integer[][]
     */
    function criticalConnections($n, $connections) {
        [$cc, $visited] = [[],[]];
        $adjList = $this->buildAdjList($connections);
        for ($i = 0; $i < $n; $i++){
            $this->dfs($i, -1, $adjList, $visited, $cc, 1);
        }
        return $cc;
    }

    private function buildAdjList(array $connections): array{
        $adjList = [];
        foreach($connections as $conn) {
            if (!isset($adjList[$conn[0]])) 
                $adjList[$conn[0]] = [$conn[1]];
            else $adjList[$conn[0]][] = $conn[1];
            if (!isset($adjList[$conn[1]])) 
                $adjList[$conn[1]] = [$conn[0]];
            else $adjList[$conn[1]][] = $conn[0];
        }
        return $adjList;
    }
    
    private function dfs(int $curr, int $parent, array $adjList, array &$visited, array &$cc, int $depth): int {
        if ($visited[$curr] > 0) return $curr;
        $visited[$curr] = $depth;
        $biggestLoopNode = -1;

        foreach($adjList[$curr] as $next) {
            if ($next === $parent) continue;
            $loopNode = $this->dfs($next, $curr, $adjList, $visited, $cc, $depth+1);
            if ($loopNode < 0) 
                $cc[] = [$curr, $next];
            else if ($biggestLoopNode < 0 || $visited[$loopNode] < $visited[$biggestLoopNode])
                $biggestLoopNode = $loopNode;
        }
        return $biggestLoopNode === $curr ? -1 : $biggestLoopNode;
    }
}
