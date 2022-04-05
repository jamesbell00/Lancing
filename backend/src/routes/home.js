import { Router } from "express";
import { 
    getHomePageFreelancer,
    getHomePageCompany
} from '../controllers/home.js'

const router = Router();

router.get("/frhome/:id", getHomePageFreelancer)

router.get("/cohome/:id", getHomePageCompany) 



export default router;