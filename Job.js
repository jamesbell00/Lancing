const con = require('./connection')
let freelancers = [null];


class Job {
    constructor(id, company_id, name, description, budget, duration, file){
        this.id =id;
        this.company_id = company_id;
        this.name = name;
        this.description = description;
        this.budget = budget;
        this.duration = duration;
        this.file = file;
    }

    updateDB() {
        const query = "UPDATE Job SET " +
                    "name = '" + this.name + "'," +
                    "description = '" + this.description + "'," +
                    "budget = '" + this.budget + "'," +
                    "duration = '" + this.duration + "'," +
                    "file = '" + this.file + " " +
                    "WHERE job_id = " + this.company_id;
        
        con.query(query, (err, rows, fields) => {
            if(err) throw err;
            console.log("Database update successfully!")
        })
    }
}