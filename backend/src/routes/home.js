import { Router } from "express";
import { 
    getHomePageJobs,
    getHomePageFreelancers
} from '../controllers/home.js'

const router = Router();

router.get("/frhome/:id", getHomePageJobs)

router.get("/cohome/:id", getHomePageFreelancers) 



export default router;