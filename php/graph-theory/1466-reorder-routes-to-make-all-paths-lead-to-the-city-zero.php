// Title: 1466. Reorder Routes to Make All Paths Lead to the City Zero 
// Problem Link: https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description
// Difficulty: Medium 
// Time O(v x e) Space O(n) where v = vertices, e = edges

class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $connections
     * @return Integer
     */
    function minReorder($n, $connections) {
        [$outAdjList, $inAdjList] = $this->buildAdjList($connections);
        $visited = [];
        $count = 0;
        $next = [0];
        while (count($next) > 0){
            $new = [];
            foreach($next as $city) {
                foreach($outAdjList[$city] as $dest) {
                    if ($visited[$dest]) continue;
                    $count++;
                    $new[] = $dest;
                }
                foreach($inAdjList[$city] as $origin) {
                    if ($visited[$origin]) continue;
                    $new[] = $origin;
                }
                $visited[$city] = true;
            }
            $next = $new;
        }
        return $count;
    }

    private function buildAdjList(array $connections): array{
        [$outAdjList, $inAdjList] = [];
        foreach($connections as $conn) {
            if (!isset($outAdjList[$conn[0]])) 
                $outAdjList[$conn[0]] = [$conn[1]];
            else $outAdjList[$conn[0]][] = $conn[1];
        }
        foreach($connections as $conn) {
            if (!isset($inAdjList[$conn[1]])) 
                $inAdjList[$conn[1]] = [$conn[0]];
            else $inAdjList[$conn[1]][] = $conn[0];
        }
        return [$outAdjList, $inAdjList];
    }
}
