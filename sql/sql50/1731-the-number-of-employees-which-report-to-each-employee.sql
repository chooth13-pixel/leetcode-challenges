// Title: 1731. The Number of Employees Which Report to Each Employee 
// Problem Link: https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/?envType=study-plan-v2&envId=top-sql-50 
// Difficulty: Easy

select
e2.employee_id,
e2.name,
count(*) reports_count,
round(avg(e1.age)) average_age
from Employees e1
join Employees e2
on e1.reports_to = e2.employee_id
group by e1.reports_to
order by e2.employee_id asc
