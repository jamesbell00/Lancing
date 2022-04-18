////////////////////////////////
// Load User Info
////////////////////////////////
export const q_getFreelancerByEmail = 'select id as "freelancer_id", fname , concat(fname," ",lname) as name, id, bio as "description",  address, website, email, country_code, phone, dob as "year", cvFile as file, picture, concat(city,", ",country)  as location from Freelancer where email= ?'
export const q_getCompanyByEmail = 'select name, name as "fname", company_id as id, email, address, phone, country_code, description, year_founded as "year", sector_id, no_emp, website, logo as picture from Company where email=?'

////////////////////////////////
// Home page
////////////////////////////////

export const q_getHomePageFreelancer = `select c.name as 'subtitle', j.name as 'title', concat("$",j.budget) as 'detail', j.job_id as 'item_id', concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where f.id = ? group by j.job_id, id, total.skills, total.tech, total.soft order by totalmatch desc`
export const q_getHomePageComppany= `select concat(f.fname," ",f.lname) as 'title',f.id as 'item_id', concat(f.dob," years old") as 'detail',  concat(f.city,", ", f.country) as 'subtitle', concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where c.company_id = ? group by j.job_id, id, c.company_id, f.bio, total.skills, total.tech, total.soft order by totalmatch desc`

////////////////////////////////
// Profile page
////////////////////////////////
export const q_getFreelancerSkills="select  sc.category_name as category, ss.subcategory_name as name, ss.subcategory_id as subcat_id, s.skill_name as description from Freelancer_Skills fs join Skill_Categories sc on sc.category_id= fs.category_id  join Skill_Subcategories ss on ss.subcategory_id=fs.subcategory_id join Skills s on s.skill_id=fs.skill_id where fs.freelancer_id=? and fs.category_id=sc.category_id and fs.subcategory_id= ss.subcategory_id and s.category_id=fs.category_id and s.subcategory_id=fs.subcategory_id and fs.skill_id=s.skill_id and sc.category_id=ss.category_id group by fs.freelancer_id, sc.category_name, ss.subcategory_name, s.skill_name, ss.subcategory_id order by category, ss.subcategory_id"
export const q_getCompanysJobs="select name, description from Jobs where company_id=? "

////////////////////////////////
// Searched Item Page
////////////////////////////////
export const q_getJobById="select j.job_id as 'item_id', j.name as name, j.description as description, j.budget as line2, j.duration as line3, j.file as file, c.name as company, c.address as address, jst.status as detail1, c.logo as logo, c.description as company_description, c.year_founded as year_founded, c.website as website, c.sector_id as sector_id, c.email as email, c.phone as phone, c.country_code as countrycode from Jobs j join Company c on j.company_id= c.company_id join Job_Status jst on j.status_id= jst.id where j.job_id=?"
export const q_getFreelancerById = 'select id as "item_id",concat(fname, " ", lname) as "name", bio as description, dob as "line2", concat(city, ", ", country) as "line3", city as "detail1", email, city, cvFile as "file", address, phone, country_code, website from Freelancer   where id = ?'
export const q_getJobSkills="select  js.job_id as id,  sc.category_name as category, ss.subcategory_name as name, ss.subcategory_id as subcat_id, s.skill_name as description from Job_Skills js join Skill_Categories sc on sc.category_id= js.category_id  join Skill_Subcategories ss on ss.subcategory_id=js.subcategory_id join Skills s on s.skill_id=js.skill_id where js.job_id=? and js.category_id=sc.category_id and js.subcategory_id= ss.subcategory_id and s.category_id=js.category_id and s.subcategory_id=js.subcategory_id and js.skill_id=s.skill_id and sc.category_id=ss.category_id group by js.job_id, sc.category_name, ss.subcategory_name, s.skill_name, ss.subcategory_id order by category, ss.subcategory_id"


////////////////////////////////
// User
////////////////////////////////

export const q_getUser="select * from  User where email=? "

////////////////////////////////
// Apply/Invite
////////////////////////////////
export const q_applyJob = "insert into Applications (freelancer_id, job_id, status_id) values (?, ?, ?)"



////////////////////////////////
// Saves
////////////////////////////////

//export const q_saveFreelancer="insert into Saved_Freelancers values (?,?,?,?)"
//export const q_saveJob="insert into Saved_Jobs values(?,?,?) "


//export const q_getMatchedFreelancers = `select c.company_id, j.name as 'job', concat(f.fname," ",f.lname) as 'freelancer', f.bio, concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where c.company_id = ? group by j.job_id, Freelancer, c.company_id, f.bio, total.skills, total.tech, total.soft order by totalmatch desc`
//export const q_getMatchedJobs = `select c.name as 'company', j.name as 'job', j.description, j.budget, j.duration as 'months', j.file, j.created_date, f.id as 'freelancer_id', concat(f.fname," ",f.lname) as 'freelancer', concat(round(ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*j.tech_weight,0),1),"%") as 'tech_match', concat(round(ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*(100-j.tech_weight),0),1),"%") as 'soft_match', concat(round((ifnull((sum(case when fs.category_id=1 then 1 else 0 end)/total.tech)*70,0) + ifnull((sum(case when fs.category_id=2 then 1 else 0 end)/total.soft)*30,0)),1),"%") as totalmatch from Jobs j join Job_Skills js on j.job_id = js.job_id join Freelancer_Skills fs on js.category_id = fs.category_id and js.subcategory_id = fs.subcategory_id and js.skill_id = fs.skill_id join Freelancer f on f.id = fs.freelancer_id join Company c on c.company_id = j.company_id join (select j.job_id, sum(case when s.category_id=1 then 1 else 0 end) as 'tech', sum(case when s.category_id=2 then 1 else 0 end) as 'soft', count(*) as 'skills' from Jobs j join Job_Skills js on j.job_id = js.job_id join Skills s on js.category_id = s.category_id and js.subcategory_id = s.subcategory_id and js.skill_id = s.skill_id group by j.job_id) total on total.job_id = j.job_id where f.id = ? group by j.job_id, Freelancer, total.skills, total.tech, total.soft order by totalmatch desc`

////////////////////////////////
// Freelancer queries
////////////////////////////////

// selects
export const q_getFreelancerProjects = "select j.name as 'job', c.name as 'company', j.description, js.status from Freelancer f join Freelancer_Jobs fj on f.id = fj.freelancer_id join Jobs j on j.job_id = fj.job_id join Company c on j.company_id = c.company_id join Job_Status js on fj.status_id = js.id where f.id = ?"
export const q_getAllFreelancers = 'select * from Freelancer '
export const q_getFreelancerById2 = 'select * from Freelancer where id = ?'


//updates
export const q_updateFreelancer = 'update Freelancer set ? where id = ?'

//deletes
export const q_deleteFreelancer = 'delete from Freelancer where id = ?'

//inserts 
export const q_saveFreelancer = 'insert into Freelancer (id, fname,lname,email, address, city, country, dob, phone,country_code) values (?, ?, ?, ?, ?, ?, ?, ?, ?,?)'


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
export const q_insertCompany = 'insert into Company (company_id, name, address, email) values(?,?,?,?)'


////////////////////////////////
// Jobs queries
////////////////////////////////

// selects
export const q_getJob="select j.name as name, j.description as description, j.budget as budget, j.duration as duration, j.file as file, c.name as company, c.address as address, jst.status as status, c.logo as logo, c.description as company_description, c.year_founded as year_founded, c.website as website, c.sector_id as sector_id, c.email as email, c.phone as phone, c.country_code as countrycode from Jobs j join Company c on j.company_id= c.company_id join Job_Status jst on j.status_id= jst.id where j.job_id=?"


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



////////////////////////////////
// Company Contact queries
////////////////////////////////

// selects
export const q_getCompanyContactById = 'select * from Company_Contact where company_id = ?'
// insert
export const q_insertCompanyContact = 'insert into Company_Contact (email,name,phone,country_code, company_id) values (?,?,?,?,?)'

////////////////////////////////
// Skills queries
////////////////////////////////

// selects
//export const q_getFreelancerSkills="select  fs.freelancer_id as id,  sc.category_name as category, ss.subcategory_name as subcategory, ss.subcategory_id as subcat_id, s.skill_name as skill from Freelancer_Skills fs join Skill_Categories sc on sc.category_id= fs.category_id  join Skill_Subcategories ss on ss.subcategory_id=fs.subcategory_id join Skills s on s.skill_id=fs.skill_id where fs.freelancer_id=? and fs.category_id=sc.category_id and fs.subcategory_id= ss.subcategory_id and s.category_id=fs.category_id and s.subcategory_id=fs.subcategory_id and fs.skill_id=s.skill_id and sc.category_id=ss.category_id group by fs.freelancer_id, sc.category_name, ss.subcategory_name, s.skill_name, ss.subcategory_id order by category, ss.subcategory_id"
