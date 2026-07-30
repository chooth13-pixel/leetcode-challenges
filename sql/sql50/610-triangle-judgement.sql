// Title: 610. Triangle Judgement 
// Problem Link: https://leetcode.com/problems/triangle-judgement/description/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Easy

select
*,
if(x + y > z && x + z > y && y + z > x, 'Yes', 'No') triangle
from Triangle
