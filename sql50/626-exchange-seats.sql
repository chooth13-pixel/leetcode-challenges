// Title: 626. Exchange Seats
// Problem Link: https://leetcode.com/problems/exchange-seats/description/?envType=study-plan-v2&envId=top-sql-50
// Difficulty: Medium

select
row_number() over (
    order by id
) id,
student
from (
    select
    if(id % 2 = 0, id -1, id +1) id,
    student
    from Seat
) t1
