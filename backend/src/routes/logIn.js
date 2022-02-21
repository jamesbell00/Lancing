import { Router } from "express";
import { 
    getLogIn,
    register 
} from '../controllers/logIn.js';

const router = Router();

router.get("/logIn/:email/:password",getLogIn)
router.post("/logIn/registration", register);

export default router;