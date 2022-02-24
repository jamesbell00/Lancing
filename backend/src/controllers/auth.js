import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
//import User from '../models/user.js';

import {connect} from '../database.js'
import {q_getFreelancerPassword, q_getCompanyPassword,q_updateFreelancerPassword, q_updateCompanyPassword, q_registerFreelancer, q_registerCompany, q_saveFreelancer, q_insertCompany, q_insertCompanyContact, q_getFreelancerByEmail, q_getCompanyContactByEmail, q_getCompanyById} from '../queries.js'


export const logInFreelancer = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query(q_getFreelancerPassword, [req.params.email])
    const [results]= await connection.query(q_getFreelancerByEmail,[req.params.email])
    if(rows)
    {const comparison = await bcrypt.compare(req.body.password, rows[0].password)
        if(comparison)
            {res.json(results[0])}
        else
            {res.status(502).json({message: "Password incorrect"});}
    }else{
        return res.status(404).json({message: "Email does  not exists"});
    }
}

export const logInCompany = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query(q_getCompanyPassword, [req.params.email])
    const [results]= await connection.query(q_getCompanyContactByEmail,[req.params.email])
    const [results2]= await connection.query(q_getCompanyById,[results[0].company_id])
    if(rows)
    {const comparison = await bcrypt.compare(req.body.password, rows[0].password)
        if(comparison)
            {res.json({Company: results[0], Company_Contact: results2[0]})}
        else
            {res.status(502).json({message: "Password incorrect"});}
    }else{
        return res.status(404).json({message: "Email does  not exists"});
    }
}

export const updateFreelancerPassword = async (req, res) => {
    const saltRounds = 10;
    const connection = await connect();
    const passwordOld = req.body.passwordOld;
    const passwordNew = req.body.passwordNew;
    const [rows] = await connection.query(q_getFreelancerPassword, [req.params.email])

    const comparison = await bcrypt.compare(passwordOld, rows[0].password)
    if(comparison){
        const encryptedPassword = await bcrypt.hash(passwordNew, saltRounds)
        await connection.query(q_updateFreelancerPassword, [
            encryptedPassword,
            req.params.email
        ])
        res.status(204).json({message: "Password Updated"})
    }else{
        res.status(502).json({message: "Password incorrect"})
    }
    
}

export const updateCompanyPassword = async (req, res) => {
    const saltRounds = 10;
    const connection = await connect();
    const passwordOld = req.body.passwordOld;
    const passwordNew = req.body.passwordNew;
    const [rows] = await connection.query(q_getCompanyPassword, [req.params.email])

    const comparison = await bcrypt.compare(passwordOld, rows[0].password)
    if(comparison){
        const encryptedPassword = await bcrypt.hash(passwordNew, saltRounds)
        await connection.query(q_updateCompanyPassword, [
            encryptedPassword,
            req.params.email
        ])
        res.status(204).json({message: "Password Updated"})
    }else{
        res.status(502).json({message: "Password incorrect"})
    }
    
}



    
export const registerFreelancer = async (req, res) => {
    
    const saltRounds = 10;
    const connection = await connect();   
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)

    const [results] = await connection.query(q_saveFreelancer, [
        req.body.fname,
        req.body.lname,
        req.body.email, 
        req.body.address, 
        req.body.city, 
        req.body.country, 
        req.body.dob,
        req.body.phone,
        req.body.country_code
    ])
    const [results2] = await connection.query(q_registerFreelancer, [
        req.body.email, 
        encryptedPassword,

    ])
    res.json({
        message: "Registration Succesful"
    })
}

export const registerCompany = async (req, res) => {
    const saltRounds = 10;
    const connection = await connect();
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds)

    const [results] = await connection.query(q_insertCompany, [
        req.body.Company_name, 
        req.body.address
    ])
    const [results2] = await connection.query(q_insertCompanyContact, [
        req.body.email,
        req.body.Contact_name, 
        req.body.phone,
        req.body.country_code, 
        results.insertId
        
    ])
    const [results3] = await connection.query(q_registerCompany, [
        req.body.email, 
        encryptedPassword

    ])
    res.json(
        {message: "Registration Succesful"}
    )
}

