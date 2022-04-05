import { Router } from "express";
import { 
    getCompanysJobs
} from '../controllers/profilePage.js'
const router = Router();

router.get("CompanyProfile/jobs/:id", getCompanysJobs);
export default router;