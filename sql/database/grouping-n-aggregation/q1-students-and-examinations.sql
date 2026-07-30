// Filtering & Aggregation 
// Title: Q1. Students and Examinations 
// Problem Link: https://leetcode.com/problems/students-and-examinations/description/?envType=problem-list-v2&envId=db-db3-grouping-aggregation
// Difficulty: Easy 

select 
st.student_id,
student_name,
su.subject_name,
COUNT(e.subject_name) AS attended_exams
from Students st
cross join Subjects su
left join Examinations e
on e.student_id = st.student_id
and e.subject_name = su.subject_name
group by st.student_id, su.subject_name
order by st.student_id asc, su.subject_name asc
