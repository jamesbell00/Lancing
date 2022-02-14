////////////////////////////////
// Freelancer queries
////////////////////////////////

// selects
export const q_getFreelancerProjects = "select j.name as 'job', c.name as 'company', j.description, js.status from Freelancer f join Freelancer_Jobs fj on f.id = fj.freelancer_id join Jobs j on j.job_id = fj.job_id join Company c on j.company_id = c.company_id join Job_Status js on fj.status_id = js.id where f.id = ?"
export const q_getAllFreelancers = 'select * from Freelancer'
export const q_getFreelancerById = 'select * from Freelancer where id = ?'

//updates
export const q_updateFreelancer = 'update Freelancer set ? where id = ?'

//deletes
export const q_deleteFreelancer = 'delete from Freelancer where id = ?'

//inserts 
export const q_saveFreelancer = 'insert into Freelancer (fname, lname, email, address, city, country, dob, phone, country_code) values (?, ?, ?, ?, ?, ?, ?, ?, ?)'



////////////////////////////////
// Company queries
////////////////////////////////

// selects
export const q_getAllCompanies = 'select * from Company'
export const q_getCompanyById = 'select * from Company where company_id = ?'

// updates

// deletes

// inserts


////////////////////////////////
// Jobs queries
////////////////////////////////

// selects
export const q_getAllJobs = "select j.job_id, c.name as 'company', j.name as 'job', j.description, j.budget, j.duration as 'months', j.file, j.created_date from Jobs j join Company c on c.company_id = j.company_id join Job_Status js on js.id = j.status_id where js.id=1"
export const q_getMatchedJobs = `select c.name as 'company', j.name as 'job', j.description, j.budget, j.duration as 'months', j.file, j.created_date, f.id as 'freelancer_id', concat(f.fname," ",f.lname) as 'freelancer', concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where f.id = ? group by j.job_id, Freelancer, total.skills, total.tech, total.soft order by totalmatch desc`