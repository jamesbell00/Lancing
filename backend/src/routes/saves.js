import { Router } from "express";
import { 
    getSavedFreelancers,
    getSavedJobs,
    saveFreelancer,
    saveJob,
    unSaveFreelancer,
    unSaveJob
} from '../controllers/saves.js'

const router = Router();

router.get("/SavedFreelancers", getSavedFreelancers);

router.get("/SavedJobs", getSavedJobs);

router.post("/SaveFreelancer", saveFreelancer);

router.post("/SaveJob", saveJob);

router.post("/UnsaveFreelancer",unSaveFreelancer);

router.post("/UnsaveJob",unSaveJob);

export default router;