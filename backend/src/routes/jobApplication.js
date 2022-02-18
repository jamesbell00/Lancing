import { Router } from "express";
import { 
    applyJob
} from '../controllers/jobApplication.js';

const router = Router();

router.post("/Application", applyJob);

export default router;