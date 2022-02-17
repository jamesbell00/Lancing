import { Router } from "express";
import { 
    getMatchedJobs,
    getMatchedFreelancers,
} from '../controllers/home'

const router = Router();

router.get("/home/freelancer/:id", getMatchedJobs)

router.get("/home/company/:id", getMatchedFreelancers)

export default router;