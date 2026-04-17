// Title: 1321. Restaurant Growth
// Problem Link: https://leetcode.com/problems/restaurant-growth/description/?envType=study-plan-v2&envId=top-sql-50
// Difficulty: Medium

with t1 as (
    select
    visited_on,
    sum(amount) amount
    from Customer
    group by visited_on
    order by visited_on asc
), t2 as (
    select
    visited_on,
    sum(amount) over (order by visited_on) amount
    from t1
), t3 as (
    select
    t2.visited_on,
    amount - (lag(amount, 7, 0) over ()) amount
    from t2 
)

select
t3.visited_on,
amount,
round(amount / 7, 2) average_amount
from t3
join (
    select 
    visited_on
    from Customer
    order by visited_on asc
    limit 1 
) c1
on t3.visited_on >= date_add(c2.visited_on, interval 6 day)
