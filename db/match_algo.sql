select 
	j.name as 'Job',
	concat(f.fname," ",f.lname) as 'Freelancer',
	concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match',
	concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match',
    
    concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) +
    ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as 'total_match'

from Jobs j
join Job_Skills js
	on j.job_id = js.job_id
join Freelancer_Skills fs
	on 	js.category_id = fs.category_id and
		js.subcategory_id = fs.subcategory_id and
        js.skill_id = fs.skill_id
join Freelancer f
	on f.id = fs.freelancer_id
join 	# table of total skills required per job
	(select 
		j.job_id,
        sum(case when s.category_id=1 then 1 else 0 end) as 'tech',
		sum(case when s.category_id=2 then 1 else 0 end) as 'soft',
		count(*) as 'skills'
	from Jobs j
	join Job_Skills js on j.job_id = js.job_id
	join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id
	group by j.job_id) total on total.job_id = j.job_id

group by j.job_id, Freelancer, total.skills, total.tech, total.soft
