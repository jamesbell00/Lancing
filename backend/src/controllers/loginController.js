import { validationResult } from "express-validator";
import {handleLogin as handleLoginService} from "../services/loginService.js";

export const getPageLogin = (req, res) => {
    return res.render("login.ejs", {
        errors: req.flash("errors")
    });
};

export const handleLogin = async (req, res) => {
    let errorsArr = [];
    let validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped());
        errors.forEach((item) => {
            errorsArr.push(item.msg);
        });
        req.flash("errors", errorsArr);
        return res.redirect("/login");
    }

    try {
        let user = await handleLoginService(req.body.email, req.body.password);
        console.log(`Type id: ${user.type_id}`)
        if (user.type_id == 1) {
            return res.redirect("/");
        } else {
            return res.redirect("/cohome")
        }
    } catch (err) {
        req.flash("errors", err);
        return res.redirect("/login");
    }
};

export const checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/login");
    }
    next();
};

export const checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

export const postLogOut = (req, res) => {
    req.session.destroy(function(err) {
        return res.redirect("/login");
    });
};

