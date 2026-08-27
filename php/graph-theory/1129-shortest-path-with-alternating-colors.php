// Title: 1129. Shortest Path with Alternating Colors 
// Problem Link: https://leetcode.com/problems/shortest-path-with-alternating-colors/description
// Difficulty: Medium 
// Time O(n) Space O(n)

class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $redEdges
     * @param Integer[][] $blueEdges
     * @return Integer[]
     */
    function shortestAlternatingPaths($n, $redEdges, $blueEdges) {
        $ans = array_fill(0, $n, -1);
        $ans[0] = 0;
        [$redAdjList, $blueAdjList] = $this->buildAdjLists($redEdges, $blueEdges);
        if (isset($redAdjList[0]))
            $this->traverseRed($redAdjList, $blueAdjList, $ans);
        if (isset($blueAdjList[0]))
            $this->traverseBlue($redAdjList, $blueAdjList, $ans);
        return $ans;
    }

    private function buildAdjLists(array $redEdges, array $blueEdges): array{
        [$redAdjList, $blueAdjList] = [[],[]];
        foreach ($redEdges as $edge){
            if (!isset($redAdjList[$edge[0]])) 
                $redAdjList[$edge[0]] = [$edge[1]];
            else $redAdjList[$edge[0]][] = $edge[1];
        }
        foreach ($blueEdges as $edge){
            if (!isset($blueAdjList[$edge[0]])) 
                $blueAdjList[$edge[0]] = [$edge[1]];
            else $blueAdjList[$edge[0]][] = $edge[1];
        }
        return [$redAdjList, $blueAdjList];
    }

    private function traverseRed(array $redAdjList, array $blueAdjList, array &$ans): void{
        [$redVisited, $blueVisited] = [[], []];
        $next = $redAdjList[0];
        $redVisited[0] = true;
        $count = 1;
        while (count($next) > 0){
            $new = [];
            foreach ($next as $dest){
                if ($ans[$dest] < 0 || $ans[$dest] > $count) {
                    $ans[$dest] = $count;
                }
                if ($count % 2 === 1) {
                    if (isset($blueAdjList[$dest]) && !$blueVisited[$dest]){
                        $new = [...$new, ...$blueAdjList[$dest]];
                        $blueVisited[$dest] = true;
                    }
                } else {
                    if (isset($redAdjList[$dest]) && !$redVisited[$dest]){
                        $new = [...$new, ...$redAdjList[$dest]];
                        $redVisited[$dest] = true;
                    }
                }
            }
            $count++;
            $next = $new;
        }
    }

    private function traverseBlue(array $redAdjList, array $blueAdjList, array &$ans): void{
        [$redVisited, $blueVisited] = [[], []];
        $next = $blueAdjList[0];
        $blueVisited[0] = true;
        $count = 1;
        while (count($next) > 0){
            $new = [];
            foreach ($next as $dest){
                if ($ans[$dest] < 0 || $ans[$dest] > $count) {
                    $ans[$dest] = $count;
                }
                if ($count % 2 === 0) {
                    if (isset($blueAdjList[$dest]) && !$blueVisited[$dest]){
                        $new = [...$new, ...$blueAdjList[$dest]];
                        $blueVisited[$dest] = true;
                    }
                } else {
                    if (isset($redAdjList[$dest]) && !$redVisited[$dest]){
                        $new = [...$new, ...$redAdjList[$dest]];
                        $redVisited[$dest] = true;
                    }
                }
            }
            $count++;
            $next = $new;
        }
    }
}
