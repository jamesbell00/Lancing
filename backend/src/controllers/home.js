import {connect} from '../database.js'
import {
    q_getMatchedJobs,
    q_getMatchedFreelancers,
} from '../queries'


export const getMatchedJobs = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getMatchedJobs, [req.params.id])
    console.log(rows)
    res.json(rows)
}

export const getMatchedFreelancers = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getMatchedFreelancers, [req.params.id])
    console.log(rows)
    res.json(rows)
}

