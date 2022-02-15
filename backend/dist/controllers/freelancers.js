import { connect } from '../database.js';
import { q_getAllFreelancers, q_getFreelancerById, q_getFreelancerProjects, q_deleteFreelancer } from '../queries';
export const getAllFreelancers = async (req, res) => {
  const db = await connect();
  const [rows] = await db.query(q_getAllFreelancers);
  res.json(rows);
};
export const getFreelancerById = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(q_getFreelancerById, [req.params.id]);
  console.log(rows[0]);
  res.json(rows[0]);
};
export const getFreelancerProjects = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.query(q_getFreelancerProjects, [req.params.id]);
  res.json(rows[0]);
};
export const deleteFreelancer = async (req, res) => {
  const connection = await connect();
  await connection.query('delete from Freelancer where id = ?', [req.params.id]);
  res.sendStatus(204);
}; // export const saveTask = async (req, res) => {
//     const connection = await connect();
//     const [results] = await connection.query('insert into tasks (title, description) values (?, ?)', [
//         req.body.title, 
//         req.body.description
//     ])
//     res.json({
//         id: results.insertId,
//         ...req.body,
//     })
// }
// export const deleteTask = async (req, res) => {
//     const connection = await connect(); 
//     await connection.query('delete from tasks where id = ?', [req.params.id])  
//     res.sendStatus(204);
// }
// export const updateTask = async (req, res) => {
//     const connection = await connect();
//     const results = await connection.query('update tasks set ? where id = ?', [
//         req.body,
//         req.params.id
//     ])
//     res.sendStatus(204)
// }