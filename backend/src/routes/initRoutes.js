import express from "express";
import {handleHelloWorld, handleCompanyHome} from "../controllers/homePageController.js";
import {getPageRegister, createNewUser} from "../controllers/registerController.js";
import {checkLoggedIn, checkLoggedOut, getPageLogin, postLogOut} from "../controllers/loginController.js";
import {validateRegister} from "../validation/authValidation.js";
import passport from "passport";
import {initPassportLocal} from "../controllers/passportLocalController.js";

// Init all passport
initPassportLocal();

let router = express.Router();

router.get("/", checkLoggedIn, handleHelloWorld);
router.get("/cohome", checkLoggedIn, handleCompanyHome);

router.get("/login", checkLoggedOut, getPageLogin);
// router.post("/login", passport.authenticate("local", {
//     failureRedirect: "/login",
//     successRedirect: "/",
//     successFlash: true,
//     failureFlash: true
// }));
router.post(
    '/login',
    passport.authenticate('local', {
      failureRedirect: '/login'
    }), (req, res) => {
      if (req.user.type_id === 1) {
        res.redirect('/');
      }
      if (req.user.type_id === 2) {
        res.redirect('/cohome');
      }
    });

router.get("/register", getPageRegister);
router.post("/register", validateRegister, createNewUser);
router.post("/logout", postLogOut);

export default router;

// export const initWebRoutes = (app) => {
//     router.get("/", checkLoggedIn, handleHelloWorld);
//     router.get("/login", checkLoggedOut, getPageLogin);
//     router.post("/login", passport.authenticate("local", {
//         successRedirect: "/home",
//         failureRedirect: "/login",
//         successFlash: true,
//         failureFlash: true
//     }));

//     router.get("/register", getPageRegister);
//     router.post("/register", validateRegister, createNewUser);
//     router.post("/logout", postLogOut);
//     return app.use("/home", router);
// };
