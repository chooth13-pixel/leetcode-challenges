// Window Functions & Ranking 
// Title: Q2. Rank Scores 
// Problem Link: https://leetcode.com/problems/rank-scores/description/?envType=problem-list-v2&envId=db-db4-window-functions-ranking 
// Difficulty: Medium 

select 
score,
DENSE_RANK() OVER (
    ORDER BY score DESC
) 'rank'
from Scores
