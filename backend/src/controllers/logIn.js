import { q_logInInfo, q_updateApplicationStatus, q_register } from "../queries.js";
import {connect} from '../database.js'


// get logIn Info 
export const getLogIn = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getJobApplication, [req.params.email,req.params.password])
    console.log(rows[0])
    res.json(rows[0])
}




// insert Login_info (Registration)
export const register = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query(q_register, [
        req.body.email,
        req.body.password
    ])
    res.json({
        id: results.insertId,
        ...req.body,
    });
}