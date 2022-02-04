const con = require('./connection')
let freelancers = [null];


class Freelancer {
    constructor(id, fname, lname, email, address, city, country, dob, phone, country_code, picture, cvFile, website, created_date, updated_date) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.address = address;
        this.city = city;
        this.country = country;
        this.dob = dob;
        this.phone = phone;
        this.country_code = country_code;
        this.picture = picture;
        this.cvFile = cvFile;
        this.website = website;
        this.created_date = created_date;
        this.updated_date = updated_date;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
        this.updateDB();
    }

    changeWebsite(newWebsite) {
        this.website = newWebsite;
        this.updateDB();
    }

    updateDB() {
        const query = "UPDATE Freelancer SET " +
                    "fname = '" + this.fname + "'," +
                    "lname = '" + this.lname + "'," +
                    "email = '" + this.email + "'," +
                    "address = '" + this.address + "'," +
                    "city = '" + this.city + "'," +
                    "country = '" + this.country + "'," +
                    "phone = '" + this.phone + "'," +
                    "country_code = " + this.country_code + "," +
                    "picture = '" + this.picture + "'," +
                    "cvFile = '" + this.cvFile + "'," +
                    "website = '" + this.website + "'" +
                    "WHERE id = " + this.id;
        
        con.query(query, (err, rows, fields) => {
            if(err) throw err;
            console.log("Database update successfully!")
        })
    }
}

con.query("SELECT * FROM Freelancer", function (err, rows, fields) {
    if (err) throw err;
    const result = Object.values(JSON.parse(JSON.stringify(rows)));

    result.forEach((v) => {
        freelancers.push(new Freelancer(v.id, v.fname, v.lname, v.email, v.address, v.city, v.country, v.dob, v.phone, v.country_code, v.picture, v.cvFile, v.website, v.created_date, v.updated_date))
    });

    // prints all freelancers
    console.log(freelancers);

    // testing db update
    console.log(`email before: ${freelancers[2].email}`);
    console.log(`website before: ${freelancers[2].website}`);
    const email = "alex.hart@gmail.com";
    const website = "www.alex.com";

    freelancers[2].changeEmail(email);
    freelancers[2].changeWebsite(website);

    console.log(`email after: ${freelancers[2].email}`);
    console.log(`website after: ${freelancers[2].website}`);
});



