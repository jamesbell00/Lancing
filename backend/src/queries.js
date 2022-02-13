// Freelancer queries
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
