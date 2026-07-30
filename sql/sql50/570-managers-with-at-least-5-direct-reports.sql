// Title: 570. Managers with at Least 5 Direct Reports 
// Problem Link: https://leetcode.com/problems/managers-with-at-least-5-direct-reports/description/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Medium

select 
e2.name
from (
    select
    *
    from Employee 
    group by managerId
    having count(*) >= 5
) e1
join Employee e2
on e1.managerId = e2.id
