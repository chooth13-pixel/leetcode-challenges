// Title: 1376. Time Needed to Inform All Employees
// Problem Link: https://leetcode.com/problems/time-needed-to-inform-all-employees/description
// Difficulty: Medium 
// Time O(n) Space O(n)

class Solution {

    /**
     * @param Integer $n
     * @param Integer $headID
     * @param Integer[] $manager
     * @param Integer[] $informTime
     * @return Integer
     */
    function numOfMinutes($n, $headID, $manager, $informTime) {
        $adjList = $this->buildAdjList($manager);
        return $this->dfs($headID, $adjList, $informTime, 0);
    }

    private function buildAdjList(array $manager): array{
        $adjList = [];
        foreach($manager as $i => $m) {
            if (!isset($adjList[$m])) 
                $adjList[$m] = [$i];
            else $adjList[$m][] = $i;
        }
        return $adjList;
    }

    private function dfs(int $id, array $adjList, array $informTime, int $time): int {
        if (!isset($adjList[$id])) return $time;
        $time += $informTime[$id];
        $max = 0;
        foreach($adjList[$id] as $sub) {
            $max = max($max, $this->dfs($sub, $adjList, $informTime, $time));
        }
        return $max;
    }
}
