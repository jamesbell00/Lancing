import { Router } from "express";
import {
  getAllFreelancers,
  getFreelancerById,
  getFreelancerProjects,
  deleteFreelancer,
} from "../controllers/freelancers.js";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Freelancer:
 *      type: object
 *      properties:
 *        id:
 *          type: int
 *          description: the auto-generated id of freelancer
 *        fname:
 *          type: varchar(30)
 *          description: first name
 *        lname:
 *          type: stvarchar(30)
 *          description: last name
 *        email:
 *          type: varchar(30)
 *        address: 
 *          type: varchar(100)
 *        city: 
 *          type: varchar(30)
 *        country: 
 *          type: varchar(30)
 *        dob: 
 *          type: date
 *          description: date of birth
 *        phone:
 *          type: varchar(15)
 *        country_code: 
 *          type: int
 *          description: phone country code
 *        picture:
 *          type: varchar(30)
 *        cvFile: 
 *          type: varchar(30)
 *        website:
 *          type: varchar(256)
 *        bio:
 *          type: varchar(2000)
 *        created_date:
 *          type: timestamp
 *          description: date when profile was created
 *        updated_date:
 *          type: timestamp
 *          description: date when profile was updated
 * tags:
 *  name: Freelancer
 *  description: Freelancer endpoint
 */

/**
 * @swagger
 * /freelancers:
 *  get:
 *    summary: Get all freelancers
 *    tags: [Freelancer]
 */
router.get("/freelancers", getAllFreelancers);

/**
 * @swagger
 * /freelancers/:id:
 *  get:
 *    summary: get freelancer by id
 *    tags: [Freelancer]
 */
router.get("/freelancers/:id", getFreelancerById);

/**
 * @swagger
 * /freelancers/:id/projects:
 *  get: 
 *    summary: get freelancer projects by identifier
 *    tags: [Freelancer]
 */
router.get("/freelancers/:id/projects", getFreelancerProjects)

/**
 * @swagger
 * /freelancers/:id:
 *  delete:
 *    summary: deletes freelancer by identifier
 *    tags: [Freelancer]
 */
router.delete("/freelancers/:id", deleteFreelancer)



// /**
//  * @swagger
//  * /tasks/{id}:
//  *  get:
//  *    summary: Get task by Id
//  *    tags: [Tasks]
//  */
// router.get("/tasks/:id", getTask);

// /**
//  * @swagger
//  * /tasks/{id}:
//  *  delete:
//  *    summary: delete a task by Id
//  *    tags: [Tasks]
//  */
// router.delete("/tasks/:id", deleteTask);

// /**
//  * @swagger
//  * /tasks/{id}:
//  *  put:
//  *    summary: update a task by Id
//  *    tags: [Tasks]
//  */
// router.put("/tasks/:id", updateTask);

export default router;
