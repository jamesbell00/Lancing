import { Router } from "express";
import { 
    getMatchedJobs,
    getMatchedFreelancers,
    getHomePageJobs,
    getHomePageFreelancers
} from '../controllers/home.js'

const router = Router();

router.get("/frhome/:id", getHomePageJobs)

router.get("/cohome/:id", getHomePageFreelancers) 



export default router;