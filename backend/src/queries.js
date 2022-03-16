////////////////////////////////
// Home page
////////////////////////////////
export const q_getHomePageJobs = `select c.name as 'subtitle', j.name as 'title', f.id as 'id', concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where f.id = ? group by j.job_id, id, total.skills, total.tech, total.soft order by totalmatch desc`
//export const q_getMatchedJobs = `select c.name as 'company', j.name as 'job', j.description, j.budget, j.duration as 'months', j.file, j.created_date, f.id as 'freelancer_id', concat(f.fname," ",f.lname) as 'freelancer', concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where f.id = ? group by j.job_id, Freelancer, total.skills, total.tech, total.soft order by totalmatch desc`
export const q_getHomePageFreelancers= `select concat(f.fname," ",f.lname) as 'title', concat(f.city,", ", f.country) as 'subtitle', concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where c.company_id = ? group by j.job_id, id, c.company_id, f.bio, total.skills, total.tech, total.soft order by totalmatch desc`
//export const q_getMatchedFreelancers = `select c.company_id, j.name as 'job', concat(f.fname," ",f.lname) as 'freelancer', f.bio, concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where c.company_id = ? group by j.job_id, Freelancer, c.company_id, f.bio, total.skills, total.tech, total.soft order by totalmatch desc`
export const q_getHomePageAllFreelancers = "select concat(fname,' ',lname) as 'title' , concat(city,', ',country) as 'subtitle'  from Freelancer"
export const q_getHomePageAllJobs = "select j.job_id, c.name as 'subtitle', j.name as 'title' from Jobs j join Company c on c.company_id = j.company_id join Job_Status js on js.id = j.status_id where js.id=1"

////////////////////////////////
// Freelancer queries
////////////////////////////////

// selects
export const q_getFreelancerProjects = "select j.name as 'job', c.name as 'company', j.description, js.status from Freelancer f join Freelancer_Jobs fj on f.id = fj.freelancer_id join Jobs j on j.job_id = fj.job_id join Company c on j.company_id = c.company_id join Job_Status js on fj.status_id = js.id where f.id = ?"
export const q_getAllFreelancers = 'select * from Freelancer'
export const q_getFreelancerById = 'select * from Freelancer where id = ?'
export const q_getFreelancerByEmail = 'select * from Freelancer where email= ?'

//updates
export const q_updateFreelancer = 'update Freelancer set ? where id = ?'

//deletes
export const q_deleteFreelancer = 'delete from Freelancer where id = ?'

//inserts 
export const q_saveFreelancer = 'insert into Freelancer (fname,lname,email, address, city, country, dob, phone,country_code) values (?, ?, ?, ?, ?, ?, ?, ?,?)'



////////////////////////////////
// Company queries
////////////////////////////////

// selects
export const q_getAllCompanies = 'select * from Company'
export const q_getCompanyById = 'select * from Company where company_id = ?'
export const q_getCompanyJobs = 'select  c.name as Company_Name, j.* from Jobs j join Company c on j.company_id= c.company_id where j.company_id = ?'


// updates
export const q_updateCompany = 'update Company set ? where company_id = ?'

// deletes
export const q_deleteCompany = 'delete from Company where id = ?'

// inserts
export const q_insertCompany = 'insert into Company (name, address) values(?,?)'


////////////////////////////////
// Jobs queries
////////////////////////////////

// selects
export const q_getAllJobs2 = "select j.job_id, c.name as 'company', j.name as 'job', j.description, j.budget, j.duration as 'months', j.file, j.created_date from Jobs j join Company c on c.company_id = j.company_id join Job_Status js on js.id = j.status_id where js.id=1"
// export const q_getMatchedJobs = `select c.name as 'company', j.name as 'job', j.description, j.budget, j.duration as 'months', j.file, j.created_date, f.id as 'freelancer_id', concat(f.fname," ",f.lname) as 'freelancer', concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where f.id = ? group by j.job_id, Freelancer, total.skills, total.tech, total.soft order by totalmatch desc`

////////////////////////////////
// Job Application queries
////////////////////////////////

// selects
export const q_getApplications = "select * from Applications"
export const q_getAllJobApplicationById= 'select  a.freelancer_id, concat(f.fname," ",f.lname) as name, j.name as job, s.status as status from Applications a join Freelancer f on a.freelancer_id=f.id join Jobs j on a.job_id=j.job_id join Application_Status s on a.status_id=s.id where  a.freelancer_id=? '
export const q_getJobApplication= 'select  a.freelancer_id, concat(f.fname," ",f.lname) as name, j.name as job, s.status as status from Applications a join Freelancer f on a.freelancer_id=f.id join Jobs j on a.job_id=j.job_id join Application_Status s on a.status_id=s.id where  a.freelancer_id=? and a.job_id=? '

//updates
export const q_updateApplicationStatus = "update Applications SET ? WHERE freelancer_id=? and job_id=?"

//deletes
export const q_deleteApplication="delete from Applications where freelancer_id=? and job_id=?"

// inserts
export const q_applyJob = "insert into Applications (freelancer_id, job_id, status_id) values (?, ?, ?)"



////////////////////////////////
// Company Contact queries
////////////////////////////////

// selects
export const q_getCompanyContactById = 'select * from Company_Contact where company_id = ?'
export const q_getCompanyContactByEmail = 'select * from Company_Contact where email=?'
// insert
export const q_insertCompanyContact = 'insert into Company_Contact (email,name,phone,country_code, company_id) values (?,?,?,?,?)'


////////////////////////////////
// Login Info queries
////////////////////////////////

//selects
export const q_getFreelancerPassword ="select password from Freelancers_Login_info where email=?"
export const q_getCompanyPassword = "select password from Company_Login_info where email=?"


//updates
export const q_updateFreelancerPassword = "update Freelancers_Login_info SET password=? WHERE email=?"
export const q_updateCompanyPassword = "update Company_Login_info SET password=? WHERE email=? "

//inserts (Registration)
export const q_registerFreelancer = "insert into Freelancers_login_info(email, password) values (?,?)"
export const q_registerCompany='insert into Company_login_info (email, password) values (?,?)'
