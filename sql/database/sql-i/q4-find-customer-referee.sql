// SQL I 
// Title: Q4. Find Customer Referee 
// Problem Link: https://leetcode.com/problems/find-customer-referee/description/?envType=problem-list-v2&envId=db-db1-sql-i 
// Difficulty: Easy 

select name
from Customer
where referee_id != 2 or isNull(referee_id)
