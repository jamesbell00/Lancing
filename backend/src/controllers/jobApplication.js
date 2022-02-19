import {connect} from '../database.js'
import {
    q_applyJob,
    q_getApplicationStatus,
    q_getApplications

} from '../queries.js'

// get job applications
export const getApplications = async (req, res) => {
    //console.log("yeeeee")
    const connection = await connect();
    const [rows]=await connection.query(q_getApplications)
    console.log(rows)
    res.json(rows)
}


// apply to job (by job id)
export const applyJob = async (req, res) => {
    console.log("yeeeee")
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
