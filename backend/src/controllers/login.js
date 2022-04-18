import {connect} from '../database.js'

import bcrypt from "bcryptjs";
import {handleLogin} from "../services/loginService.js";
import { validationResult } from "express-validator";


export const loginTest=async(req,res)=>{
    try{
        let user = await handleLogin(req.body.email, req.body.password);
        res.json(user)
    }
    catch(err){console.log(err)}
}
