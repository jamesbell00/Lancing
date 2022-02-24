import { Router } from "express";
import { 
    registerFreelancer,
    logInFreelancer,
    logInCompany,
    updateFreelancerPassword,
    updateCompanyPassword,
    registerCompany
} from '../controllers/auth.js';

//import { signup, login, isAuth } from '../controllers/auth.js';

const router = Router();

router.get('/loginFreelancer/:email', logInFreelancer)

router.get('/loginCompany/:email', logInCompany)

router.put('/updateFreelancerPassword/:email', updateFreelancerPassword)

router.put('/updateCompanyPassword/:email', updateCompanyPassword)

router.post('/register/Freelancer',registerFreelancer)

router.post('/register/Company',registerCompany)
//router.post('/login', login);

//router.post('/signup', signup);

//router.get('/private', isAuth);


export default router;