import { Router } from "express";
import { 
    getAllJobs,
    getMatchedJobs,
    getJob,
    getJobSkills
} from '../controllers/jobs.js'
import { 
    saveFreelancer
} from '../controllers/freelancers'

const router = Router();

router.get("/jobs", getAllJobs)
router.get("/job1/:id", getJob)
router.get("/jobs/:id", getMatchedJobs)
router.get("/job/skills/:id", getJobSkills)


router.post("/jobs/:id", saveFreelancer)


export default router;