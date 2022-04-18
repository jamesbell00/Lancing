import { connect } from "../database.js";
import bcrypt from "bcryptjs";

export const handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        //check email is exist or not
        let user = await findUserByEmail(email);
        if (user) {
            var realPassword=bcrypt.hashSync(user.password, 5)  //added only until we make all password bycrypt
            //compare password
            await bcrypt.compare(password, realPassword).then((isMatch) => {
                if (isMatch) {
                    console.log(`Type id: ${user.type_id}`)
                    
                    if(user.type_id==1){
                        let user= findFreelancerByEmail(email)
                        resolve(user)
                    }else if(user.type_id==2){
                        let user = findCompanyByEmail(email)
                        resolve(user)
                    }
                    
                } else {
                    resolve({message:`The password that you've entered is incorrect`});
                }
            });
        } else {
            resolve({message:`This user email "${email}" doesn't exist`});
        }
    });
};


export const findUserByEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connect();
            const [rows] = await connection.query(
                ' SELECT * FROM `User` WHERE `email` = ?  ', email
            );
            let user = rows[0];
            resolve(user)

        } catch (err) {
            reject(err);
        }
    });
};

export const findFreelancerByEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connect();
            const [rows] = await connection.query(
                "SELECT u.id as 'id', u.email as 'email', u.type_id as 'type_id', f.id as 'freelancer_id', f.fname as 'fname', concat(f.fname,' ',f.lname) as 'name', f.bio as 'description',  f.address as 'address', f.website as 'website', f.country_code as 'country_code', f.phone as 'phone', f.dob as 'year', f.cvFile as 'file', f.picture as 'picture', concat(f.city,', ',f.country)  as 'location' from User u join freelancer f on f.email = u.email  where u.email =?", email
            );
            let user = rows[0];
            resolve(user)

        } catch (err) {
            reject(err);
        }
    });
};

export const findCompanyByEmail = async (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connect();
            const [rows] = await connection.query(
                "SELECT u.id as 'id', u.email as 'email', u.type_id as 'type_id', c.company_id as 'company_id', c.name as 'fname', c.name as 'name', c.description as 'description',  c.address as 'address', c.website as 'website', c.country_code as 'country_code', c.phone as 'phone', c.year_founded as 'year', c.logo as 'picture', c.no_emp as 'no-emp', c.sector_id as 'sector_id' from User u join Company c on c.email = u.email  where u.email =?", email
            );
            let user = rows[0];
            resolve(user)

        } catch (err) {
            reject(err);
        }
    });
};

export const findUserById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const connection = await connect();
            const [rows] = await connection.query(
                ' SELECT * FROM `User` WHERE `id` = ?  ', id
            );
            let user = rows[0];
            resolve(user)
            
        } catch (err) {
            reject(err);
        }
    });
};

export const comparePassword = (password, userObject) => {
    return new Promise(async (resolve, reject) => {
        try {
            await bcrypt.compare(password, userObject.password).then((isMatch) => {
                if (isMatch) {
                    resolve(true);
                } else {
                    resolve(`The password that you've entered is incorrect`);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

