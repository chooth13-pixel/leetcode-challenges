// Window Functions & Ranking 
// Title: Q1. Trips and Users 
// Problem Link: https://leetcode.com/problems/trips-and-users/description/?envType=problem-list-v2&envId=db-db4-window-functions-ranking 
// Difficulty: Hard

with Banned as (
    select users_id
    from Users
    where banned = 'No'
) 

select 
request_at as Day,
(1 - round(count(if(status = 'completed', 1, null)) / count(*),2)) as 'Cancellation Rate'
from Trips 
inner join Banned b1
on client_id = b1.users_id
inner join Banned b2
on driver_id = b2.users_id
group by request_at
having DATE(request_at) >= '2013-10-01' and DATE(request_at) <= '2013-10-03'
