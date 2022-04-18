import { Router } from "express";
import {handleLogin as handleLoginService} from "../services/loginService.js";
import {loginTest} from "../controllers/login"

const router = Router();

router.post('/login', loginTest)


export default router;