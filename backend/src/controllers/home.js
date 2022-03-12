import {connect} from '../database.js'
import {
    q_getMatchedJobs,
    q_getMatchedFreelancers,
    q_getHomePageFreelancers,
    q_getHomePageJobs
} from '../queries.js'

export const getHomePageJobs = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query(q_getHomePageJobs)
    res.json(rows)
}

export const getHomePageFreelancers = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query(q_getHomePageFreelancers)
    res.json(rows)
}

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


