import {connect} from '../database.js'
import {
    q_getHomePageAllJobs,
    q_getMatchedFreelancers,
    q_getHomePageFreelancers,
    q_getHomePageJobs
} from '../queries.js'


export const getHomePageJobs = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getHomePageJobs, [req.params.id])
    
    res.json(rows)
}

export const getHomePageFreelancers = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getHomePageFreelancers, [req.params.id])
    
    res.json(rows)
}


