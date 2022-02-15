import {connect} from '../database.js'
import {
    q_getAllCompanies,
    q_getCompanyById,
} from '../queries'


export const getAllCompanies = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query(q_getAllCompanies)
    res.json(rows)
}


export const getCompanyById = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getCompanyById, [req.params.id])
    console.log(rows[0])
    res.json(rows[0])
}