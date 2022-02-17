import {connect} from '../database.js'

import {q_getAllFreelancers, 
        q_getFreelancerById, 
        q_getFreelancerProjects, 
        q_deleteFreelancer, 
        q_updateFreelancer, 
        q_saveFreelancer
} from '../queries'



export const getAllFreelancers = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query(q_getAllFreelancers)
    res.json(rows)
}

export const getFreelancerById = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getFreelancerById, [req.params.id])
    console.log(rows[0])
    res.json(rows[0])
}

export const getFreelancerProjects = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getFreelancerProjects, [req.params.id])
    res.json(rows[0])
}

export const deleteFreelancer = async (req, res) => {
    const connection = await connect(); 
    await connection.query(q_deleteFreelancer, [req.params.id])  
    res.sendStatus(204);
}

export const updateFreelancer = async (req, res) => {
    const connection = await connect();
    await connection.query(q_updateFreelancer, [
        req.body,
        req.params.id
    ])
    res.sendStatus(204)
}

//METHOD FOR ADDING FREELANCER
// create page for all not null attributes
// another page for nullables (using update)
export const saveFreelancer = async (req, res) => {
    const connection = await connect();
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
    res.json({
        id: results.insertId,
        ...req.body,
    })
}


