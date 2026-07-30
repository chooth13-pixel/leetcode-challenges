// Filtering & Aggregation 
// Title: Q4. User Activity for the Past 30 Days I 
// Problem Link: https://leetcode.com/problems/user-activity-for-the-past-30-days-i/description/?envType=problem-list-v2&envId=db-db2-filtering-aggregation 
// Difficulty: Easy

select  
activity_date as day,
count(distinct user_id) as active_users
from Activity
group by activity_date
having activity_date > DATE_SUB('2019-07-27',INTERVAL 30 DAY) 
&& activity_date <= DATE('2019-07-27')
