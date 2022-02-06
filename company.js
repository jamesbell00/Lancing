const con = require('./connection')
let companies = [null];

class Company{
    constructor(id, fullname, address, logo, description, year_founded, no_emp, website, sector_id, created_date, updated_date){
        this.id = id;
        this.name = fullname;
        this.address = address;
        this.logo = logo;
        this.description = description;
        this.year_founded = year_founded;
        this.no_emp = no_emp;
        this.website = website;
        this.sector_id =this.sector_id;
        this.created_date = this.created_date;
        this.updated_date =this.updated_date;
    }
    updateDescription(newDescription) {
        this.description=newDescription;
        this.updateDB();
    }

    updateLogo(newLogo) {
        this.description=newLogo;
        this.updateDB();
    }

    updateDB() {
        const query = "UPDATE Company SET " +
                    "name = '" + this.name + "'," +
                    "address = '" + this.address + "'," +
                    "logo = '" + this.logo + "'," +
                    "description = '" + this.description + "'," +
                    "year_founded = '" + this.year_founded + "'," +
                    "no_emp = '" + this.no_emp + "'," +
                    "website = '" + this.website + "'," +
                    "sector_id = " + this.sector_id + "," +
                    "created_date = '" + this.created_date + "'," +
                    "updated_date = '" + this.updated_date + "'," +
                    "WHERE id = " + this.id;
        
        con.query(query, (err, rows, fields) => {
            if(err) throw err;
            console.log("Database update successfully!")
        })
    }

}