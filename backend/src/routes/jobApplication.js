import { Router } from "express";
import { 
    applyJob,
    getApplications,
    getAllJobApplicationById,
    getJobApplication,
    updateApplicationStatus
} from '../controllers/jobApplication.js';

const router = Router();

router.get('/jobApplication', getApplications)

router.get('/jobApplication/:id', getAllJobApplicationById)

router.get('/jobApplication/:id/:id2', getJobApplication)

router.put('/jobApplication/:id/:id2', updateApplicationStatus)

router.post("/Application/jobs", applyJob);

export default router;