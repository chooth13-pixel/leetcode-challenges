// Filtering & Aggregation 
// Title: Q4. Movie Rating 
// Problem Link: https://leetcode.com/problems/movie-rating/description/?envType=problem-list-v2&envId=db-db3-grouping-aggregation 
// Difficulty: Medium

select results from (
    select 
    name as results
    from Users
    inner join MovieRating
    using (user_id)
    group by user_id
    order by Count(*) desc, name asc
    limit 1
) name
union all
select results from (
    select 
    title as results
    from Movies
    inner join MovieRating
    using (movie_id)
    where created_at LIKE '2020-02%'
    group by movie_id
    order by Avg(rating) desc, title asc
    limit 1
) movie
