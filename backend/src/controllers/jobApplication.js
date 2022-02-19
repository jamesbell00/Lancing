import {connect} from '../database.js'
import {
    q_applyJob,
    q_getApplications,
    q_getAllJobApplicationById,
    q_getJobApplication,
    q_updateApplicationStatus

} from '../queries.js'

// get all job applications
export const getApplications = async (req, res) => {
    
    const connection = await connect()
    const [rows]= await connection.query(q_getApplications)
    res.json(rows)
}

// get all the job applications  by freelancer id
export const getAllJobApplicationById = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getAllJobApplicationById, [req.params.id])
    console.log(rows[0])
    res.json(rows[0])
}

// get a specific job application by freelancer id and job id
export const getJobApplication = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getJobApplication, [req.params.id,req.params.id2])
    console.log(rows[0])
    res.json(rows[0])
}

// update the application status by freelancer id and job id
export const updateApplicationStatus = async (req, res) => {
    const connection = await connect();
    await connection.query(q_updateApplicationStatus, [
        req.body,
        req.params.id,
        req.params.id2
    ])
    res.sendStatus(204)
}

// Apply for a job and apply 
export const applyJob = async (req, res) => {
    const connection = await connect();
    const [results] = await connection.query(q_applyJob, [
        req.body.status_id
    ])
    res.json({
        id: results.insertId,
        id2: results.insertId2,
        ...req.body,
    })
}
