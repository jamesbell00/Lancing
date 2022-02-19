import {connect} from '../database.js'
import {
    q_applyJob,
    q_getApplications,
    q_getAllJobApplicationById,
    q_getJobApplication,
    q_updateApplicationStatus

} from '../queries.js'

// get job applications
export const getApplications = async (req, res) => {
    
    const connection = await connect()
    const [rows]= await connection.query(q_getApplications)
    res.json(rows)
}

// get jobs' status by freelancer id
export const getAllJobApplicationById = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getAllJobApplicationById, [req.params.id])
    console.log(rows[0])
    res.json(rows[0])
}

// get jobs' status by freelancer id
export const getJobApplication = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getJobApplication, [req.params.id,req.params.id2])
    console.log(rows[0])
    res.json(rows[0])
}

export const updateApplicationStatus = async (req, res) => {
    const connection = await connect();
    await connection.query(q_updateApplicationStatus, [
        req.body,
        req.params.id,
        req.params.id2
    ])
    res.sendStatus(204)
}


// apply to job (by job id)
export const applyJob = async (req, res) => {
    
    const connection = await connect();
    const [results]=await connection.query(q_applyJob, [
        req.body.freelancer_id,
        req.body.job_id, 
        req.body.status_id])
    console.log(results)
    res.json({
        id: results.insertId,
        ...req.body,
    })
}
