import { Router } from "express";
import { 
    applyJob,
    getApplications
} from '../controllers/jobApplication.js';

const router = Router();

router.get('/jobApplication', getApplications)

router.post("/Application/jobs", applyJob);

export default router;