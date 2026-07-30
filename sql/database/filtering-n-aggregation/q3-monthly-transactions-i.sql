// Filtering & Aggregation 
// Title: Q3. Monthly Transactions I 
// Problem Link: https://leetcode.com/problems/monthly-transactions-i/description/?envType=problem-list-v2&envId=db-db2-filtering-aggregation 
// Difficulty: Medium

select 
DATE_FORMAT(trans_date, '%Y-%m') month, 
country, 
COUNT(*) as trans_count,
COUNT(IF(state = 'approved', 1, null)) as approved_count,
SUM(amount) AS trans_total_amount,
SUM(IF(state = 'approved', amount, 0)) AS approved_total_amount
from Transactions
group by month, country

