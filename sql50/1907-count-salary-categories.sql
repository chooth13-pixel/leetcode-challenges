// Title: 1907. Count Salary Categories 
// Problem Link: https://leetcode.com/problems/count-salary-categories/description/?envType=study-plan-v2&envId=top-sql-50
// Difficulty: Medium

with t1 as (
    SELECT 'Low Salary' AS category
    UNION ALL SELECT 'Average Salary'
    UNION ALL SELECT 'High Salary'
), t2 as (
    select
    case
    when income < 20000 then 'Low Salary'
    when income >= 20000 and income <= 50000 then 'Average Salary'
    else 'High Salary'
    END category,
    count(*) accounts_count
    from Accounts
    group by category
)

select
t1.category,
ifnull(accounts_count, 0) accounts_count
from t1
left join t2
on t1.category = t2.category
