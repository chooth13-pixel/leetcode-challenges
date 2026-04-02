// SQL II
// Title: Q1. Investments in 2016 
// Problem Link: https://leetcode.com/problems/investments-in-2016/description/?envType=problem-list-v2&envId=db-db5-sql-ii 
// Difficulty: Medium

with latlon as (
    select 
    *
    from Insurance
    group by lat, lon
    having count(*) < 2
),
tiv as (
    select 
    *
    from Insurance
    group by tiv_2015
    having count(*) > 1
)

select 
round(sum(l.tiv_2016), 2) as tiv_2016
from
latlon l
inner join tiv t
on l.tiv_2015 = t.tiv_2015
