const formidable = require('formidable');
const path = require('path');
const fs = require('fs');
import {createNewUser as addUser} from "./../services/registerService.js";
import { validationResult } from "express-validator";
import { findUserByEmail } from './../services/loginService'
import { q_insertCompany, q_saveFreelancer } from "../queries.js";
import { connect } from "../database.js";

export const getPageRegister = (req, res) => {
    return res.render("register.ejs", {
        errors: req.flash("errors")
    });
};

export const createNewUser = async (req, res) => {
    //validate required fields
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/register");
    }

    //create a new user
    let newUser = {
        email: req.body.email,
        password: req.body.password,
        type_id: req.body.type_id
    };
    try {
        await addUser(newUser);
        // return res.redirect("/login");
        let user = await findUserByEmail(newUser.email);
        req.login(user, function (err) {
            if (err) {
                console.log(err)
                return res.redirect("/login")
            } else {
                console.log(user)
                return res.redirect("/registerDetails")
            }
        })
        
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/register");
    }
};

export const saveFreelancer = async (req, res) => {
    const connection = await connect();
    connection.query(q_saveFreelancer, [
        req.user.id,
        req.body.fname, 
        req.body.lname, 
        req.user.email, 
        req.body.address, 
        req.body.city, 
        req.body.country, 
        req.body.dob, 
        req.body.phone, 
        req.body.country_code
    ])
}

export const saveCompany = async (req, res) => {
    const connection = await connect();
    await connection.query(q_insertCompany, [
        req.user.id,
        req.body.name,
        req.body.address,
        req.user.email
    ])
    uploadPic(req, res);
}

export const uploadPic = async (req, res) => {
    console.log("uploading pic")
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = path.join(__dirname, '/../../', '/uploads/images/fullsize/profilepic', req.user.id);
        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        });
    });
}
