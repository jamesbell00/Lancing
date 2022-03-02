import {createNewUser as addUser} from "./../services/registerService.js";
import { validationResult } from "express-validator";

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
        return res.redirect("/login");
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/register");
    }
};
