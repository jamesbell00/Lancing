import {connect} from '../database.js'
import {
    q_getAllJobs,
    q_getMatchedJobs,
} from '../queries'

export const getAllJobs = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query(q_getAllJobs)
    res.json(rows)
}

export const getMatchedJobs = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getMatchedJobs, [req.params.id])
    console.log(rows)
    res.json(rows)
}

// get job by id

// apply to job (by job id)
