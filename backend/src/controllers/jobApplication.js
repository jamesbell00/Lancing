import {connect} from '../database.js'
import {
    q_applyJob,
} from '../queries.js'

// apply to job (by job id)
export const applyJob = async (req, res) => {
    console.log("yeeeee")
    const connection = await connect();
    const [results]=await connection.query(q_applyJob, [
        req.body.freelancer_id,
        req.body.job_id, 
        req.body.status_id])
    console.log(results)
    res.sendStatus(204);
}
