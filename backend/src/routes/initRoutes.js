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


var form = '<form action="/upload" method="post" enctype="multipart/form-data">' +
'<input type="file" name="filetoupload"><br>' +
'<input type="submit">' +
'</form>';

router.get('/home', function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html' });
  res.end(form);  
});

router.post('/upload', (req, res) => {
  console.log("uploading pic")
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = path.join(__dirname, '/../../', '/uploads/images/fullsize/', files.filetoupload.originalFilename);
        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
          res.end("file uploaded and moved")
        });
    });
});

const path = require('path');
const fs = require('fs');
const formidable = require('formidable');

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
