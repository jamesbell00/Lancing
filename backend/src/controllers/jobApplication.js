import {connect} from '../database.js'
import {
    q_applyJob,
} from '../queries.js'

// apply to job (by job id)
export const applyJob = async (req, res) => {
    const connection = await connect();
    cosnt [results]=await connection.query(q_applyJob, [
        req.params.fid,
        req.params.jid, 
        req.body.status_id])
    console.log(results)
    res.sendStatus(204);
}
