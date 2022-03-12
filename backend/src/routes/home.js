import { Router } from "express";
import { 
    getMatchedJobs,
    getMatchedFreelancers,
    getHomePageJobs,
    getHomePageFreelancers
} from '../controllers/home.js'

const router = Router();

router.get("/frhome", getHomePageJobs)

router.get("/cohome", getHomePageFreelancers) 

router.get("/frhome/:id", getMatchedJobs)

router.get("/cohome/:id", getMatchedFreelancers)

export default router;