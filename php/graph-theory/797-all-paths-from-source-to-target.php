// Title: 797. All Paths From Source to Target
// Problem Link: https://leetcode.com/problems/all-paths-from-source-to-target/description
// Difficulty: Medium 
// Time O(n^2) Space O(n^2)

class Solution {

    /**
     * @param Integer[][] $graph
     * @return Integer[][]
     */
    function allPathsSourceTarget($graph) {
        [$paths, $path] = [[], []];
        $lastNode = count($graph) - 1;
        $this->dfs(0, $lastNode, $graph, $paths, $path);
        return $paths;
    }

    private function dfs(int $node, int $lastNode, array $adjList, array &$paths, array $path): void {
        $path[] = $node;
        if ($node === $lastNode) $paths[] = $path;
        if (count($adjList[$node]) === 0) return;
        foreach($adjList[$node] as $child) {
            $this->dfs($child, $lastNode, $adjList, $paths, $path);
        }
    }
}
