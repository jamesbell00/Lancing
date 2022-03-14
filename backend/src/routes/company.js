import { Router } from "express";
import {
    getAllCompanies,
    getCompanyById,
    getCompanyJobs,
    getCompanyContact,
    saveCompany,
  } from "../controllers/company.js";


const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *    Company:
 *      type: object
 *      properties:
 *        company_id:
 *          type: int
 *          description: the auto-generated id of a company
 *        name:
 *          type: varchar(50)
 *          description: company name
 *        address: 
 *          type: varchar(50)
 *        logo:
 *          type: varchar(30)
 *        description: 
 *          type: varchar(200)
 *        year_founded: 
 *          type: varchar(4)
 *        no_emp: 
 *          type: int
 *          description: number of employees
 *        website:
 *          type: varchar(30)
 *        sector_id:
 *          type: int
 *        created_date:
 *          type: timestamp
 *          description: date when profile was created
 *        updated_date:
 *          type: timestamp
 *          description: date when profile was updated
 * tags:
 *  name: Company
 *  description: Company endpoint
 */


/**
 * @swagger
 * /companies:
 *  get:
 *    summary: Get all companies
 *    tags: [Company]
 */
router.get("/companies", getAllCompanies);


/**
 * @swagger
 * /companies/:id:
 *  get:
 *    summary: get company by id
 *    tags: [Company]
 */
router.get("/companies/:id", getCompanyById);

/**
 * @swagger
 * /companies/:id/jobs:
 *  get:
 *    summary: get all the jobs of the company
 *    tags: [Company]
 */
 router.get("/companies/:id/Jobs", getCompanyJobs);

 /**
 * @swagger
 * /companies/:id/companyContact:
 *  get:
 *    summary: get the contact of the company 
 *    tags: [Company]
 */
  router.get("/companies/:id/companyContact", getCompanyContact);


/**
 * @swagger
 * /companies:
 *  post:
 *    summary: inserts new row into company table
 *    tags: [Company]
 */
  router.post("/companies", saveCompany);


export default router;