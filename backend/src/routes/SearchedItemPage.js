import { Router } from "express";
import { 
    getFreelancerById,
    getJobById
} from '../controllers/SearchedItemPage.js'


const router = Router();

router.get("/job/:id", getJobById);
router.get("/freelancer/:id", getFreelancerById);

export default router;