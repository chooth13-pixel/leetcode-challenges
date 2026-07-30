-- Title: 1484. Group Sold Products By The Date
-- Problem Link: https://leetcode.com/problems/group-sold-products-by-the-date/description/?envType=study-plan-v2&envId=top-sql-50
-- Difficulty: Easy

select
sell_date,
count(distinct product) num_sold,
group_concat(
    distinct product
    separator ',') products
from Activities
group by sell_date
