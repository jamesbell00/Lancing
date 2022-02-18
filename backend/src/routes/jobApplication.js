import { Router } from "express";
import { 
    applyJob
} from '../controllers/jobApplication.js';

const router = Router();

router.post("/Application/:fid/:jid",applyJob);

export default router;