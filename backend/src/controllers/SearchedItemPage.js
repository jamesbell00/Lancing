import {connect} from '../database.js'
import {
    q_getFreelancerById,
    q_getJobById
} from '../queries.js'

export const getJobById = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getJobById, [req.params.id])
    res.json(rows[0])
}
export const getFreelancerById = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getFreelancerById, [req.params.id])
    res.json(rows[0])
}
