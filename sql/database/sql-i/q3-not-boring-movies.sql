// SQL I 
// Title: Q3. Not Boring Movies 
// Problem Link: https://leetcode.com/problems/not-boring-movies/description/?envType=problem-list-v2&envId=db-db1-sql-i 
// Difficulty: Easy 

select *
from Cinema c
where id % 2 = 1 
and description != 'boring'
order by rating desc
