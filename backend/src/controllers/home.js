import {connect} from '../database.js'
import {
    q_getHomePageFreelancer,
    q_getHomePageComppany
} from '../queries.js'


export const getHomePageFreelancer = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getHomePageFreelancer, [req.params.id])
    
    res.json(rows)
}

export const getHomePageCompany = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getHomePageComppany, [req.params.id])
    
    res.json(rows)
}


