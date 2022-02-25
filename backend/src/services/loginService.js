import { connect } from "../database.js";
import bcrypt from "bcryptjs";

export const handleLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        //check email is exist or not
        let user = await findUserByEmail(email);
        if (user) {
            //compare password
            await bcrypt.compare(password, user.password).then((isMatch) => {
                if (isMatch) {
                    console.log(`Type id: ${user.type_id}`)
                    resolve(user);
                } else {
                    reject(`The password that you've entered is incorrect`);
                }
            });
        } else {
            reject(`This user email "${email}" doesn't exist`);
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

