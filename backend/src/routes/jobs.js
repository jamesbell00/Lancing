import { Router } from "express";
import { 
    getAllJobs,
    getMatchedJobs,
} from '../controllers/jobs.js'
import { 
    saveFreelancer
} from '../controllers/freelancers'

const router = Router();

router.get("/jobs", getAllJobs)

router.get("/jobs/:id", getMatchedJobs)

router.post("/jobs/:id", saveFreelancer)


export default router;