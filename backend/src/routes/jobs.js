import { Router } from "express";
import { 
    getAllJobs,
    getMatchedJobs,
} from '../controllers/jobs.js'

const router = Router();

router.get("/jobs", getAllJobs)

router.get("/jobs/:id", getMatchedJobs)


export default router;