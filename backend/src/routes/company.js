import { Router } from "express";

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