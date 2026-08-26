// Title: 841. Keys and Rooms
// Problem Link: https://leetcode.com/problems/keys-and-rooms/description
// Difficulty: Medium 
// Time O(n^2) Space O(n)

class Solution {

    /**
     * @param Integer[][] $rooms
     * @return Boolean
     */
    function canVisitAllRooms($rooms) {
        $visited = [];
        $visited[0] = true;
        $this->bfs($rooms, $visited, 0);
        return count($visited) === count($rooms);
    }

    private function bfs(array $graph, array &$visited, int $curr){
        $next = [$curr];
        while (count($next) > 0){
            $k = array_rand($next);
            $curr = $next[$k];
            foreach ($graph[$curr] as $j => $key){
                if (!$visited[$key]) {
                    $next[] = $key;
                    $visited[$key] = true;
                } 
            }
            unset($next[$k]);
        }
    }
}
