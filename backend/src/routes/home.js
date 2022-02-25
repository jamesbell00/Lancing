import { Router } from "express";
import { 
    getMatchedJobs,
    getMatchedFreelancers,
} from '../controllers/home.js'

const router = Router();

router.get("/frhome/:id", getMatchedJobs)

router.get("/cohome/:id", getMatchedFreelancers)

export default router;