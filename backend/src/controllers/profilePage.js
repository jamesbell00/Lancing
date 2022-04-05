import {connect} from '../database.js'
import {
    q_getCompanysJobs
} from '../queries.js'

export const getCompanysJobs = async (req, res) => {
    console.log("hel")
    const connection = await connect();
    const [rows] = await connection.query(q_getCompanysJobs, [req.params.id])
    res.json(rows[0])
}
