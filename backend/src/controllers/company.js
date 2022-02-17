import {connect} from '../database.js'
import {
    q_getAllCompanies,
    q_getCompanyById,
    q_getCompanyJobs,
    q_getCompanyContact,
    q_insertCompanyContact,
} from '../queries.js'


export const getAllCompanies = async (req, res) => {
    const db = await connect()
    const [rows] = await db.query(q_getAllCompanies)
    res.json(rows)
    console.log(rows)
}


export const getCompanyById = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getCompanyById, [req.params.id])
    console.log(rows[0])
    res.json(rows[0])
}

// get jobs by company (maybe add to get company by id)

export const getCompanyJobs = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getCompanyJobs, [req.params.id])
    res.json(rows)
}

export const getCompanyContact = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query(q_getCompanyContact, [req.params.id])
    res.json(rows[0])
}

