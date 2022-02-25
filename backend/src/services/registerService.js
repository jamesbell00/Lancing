import { connect } from "./../database.js";
import bcrypt from "bcryptjs";

export const createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        // check email is exist or not
        let isEmailExist = await checkExistEmail(data.email);
        if (isEmailExist) {
            reject(`This email "${data.email}" has already exist. Please choose an other email`);
        } else {
            // hash password
            let salt = bcrypt.genSaltSync(10);
            let userItem = {
                email: data.email,
                password: bcrypt.hashSync(data.password, salt),
                type_id: data.type_id
            };

            //create a new account
            const connection = await connect();
            const [rows] = await connection.query(
                ' INSERT INTO User set ? ', userItem,
            );
            resolve("Create a new user successful");
        }
    });
};

let checkExistEmail = async (email) => {
    return new Promise( async (resolve, reject) => {
        try {
            const connection = await connect();
            const [rows] = await connection.query(
                ' SELECT * FROM User WHERE email = ? ', email
            );
            if (rows.length>0) {
                resolve(true)
            } else {
                resolve(false)
            }
        } catch (err) {
            reject(err);
        }
    });
};

