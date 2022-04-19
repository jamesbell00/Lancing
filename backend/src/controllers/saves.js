import {connect} from '../database.js'

import {
    q_getSavedFreelancers,
    q_getSavedJobs,
    q_saveFreelancer,
    q_saveJob,
    q_unsaveFreelancer,
    q_unsaveJob
} from '../queries.js'

export const getSavedFreelancers = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getSavedFreelancers, [req.body.company_id,req.body.job_id])
    
    res.json(rows[0])
}

export const getSavedJobs = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getSavedJobs, [req.body.freelancer_id])
    
    res.json(rows[0])
}

export const saveFreelancer = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query(q_saveFreelancer, [
        req.body.freelancer_id,
        req.body.job_id,
        req.body.company_id
    ])
    res.json({
        id: results,
        ...req.body,
    })
}

export const saveJob = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query(q_saveJob, [
        req.body.freelancer_id,
        req.body.job_id
    ])
    res.json({
        id: results,
        ...req.body,
    })
}
export const unSaveFreelancer = async (req, res) => {
    console.log("works")
    const connection = await connect();
    console.log("works")
    const [results] = await connection.query(q_unsaveFreelancer, [
        req.body.freelancer_id,
        req.body.job_id,
        req.body.company_id
    ])
    res.json({
        id: results.insertedId,
        ...req.body,
    })
}

export const unSaveJob = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query(q_unsaveJob, [
        req.body.freelancer_id,
        req.body.job_id
    ])
    res.json({
        id: results.insertId,
        ...req.body,
    })
}