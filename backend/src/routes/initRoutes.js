import express from "express";
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');
import {handleHelloWorld, handleCompanyHome, handleFreelancerRegister, handleCompanyRegister} from "../controllers/homePageController.js";
import {getPageRegister, createNewUser, saveFreelancer, saveCompany, uploadPic} from "../controllers/registerController.js";
import {checkLoggedIn, checkLoggedOut, getPageLogin, postLogOut} from "../controllers/loginController.js";
import {validateRegister} from "../validation/authValidation.js";
import passport from "passport";
import {initPassportLocal} from "../controllers/passportLocalController.js";

// Init all passport
initPassportLocal();

let router = express.Router();

////////////////////////////////
// goes to respective home pages depending on type id
router.get("/", checkLoggedIn, (req, res) => {

  if (req.user.type_id === 1) {
    handleHelloWorld(req, res)
  } else {
    handleCompanyHome(req,res)
  }
});
////////////////////////////////

router.get("/registerDetails", checkLoggedIn, (req, res) => {
  console.log(req.user)
  if (req.user.type_id === 1) {
    handleFreelancerRegister(req, res)
  } else {
    handleCompanyRegister(req,res)
  }
});

router.post("/registerDetails", (req, res) => {
  if (req.user.type_id === 1) {
    saveFreelancer(req, res)
  } else {
    saveCompany(req, res)
  }
  res.redirect("/")
})

// router.get("/", checkLoggedIn, handleHelloWorld);
// router.get("/cohome", checkLoggedIn, handleCompanyHome);

router.get("/login", checkLoggedOut, getPageLogin);

router.post(
  '/login',
  passport.authenticate('local', {
    failureRedirect: '/login'
  }), (req, res) => {
    res.redirect("/")
  });

router.get("/register", getPageRegister);
router.post("/register", validateRegister, createNewUser);
router.post("/logout", postLogOut);

//upload images and files
export function createFolder(folderName){
  try {
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName)
      fs.mkdirSync(folderName+'/images')
      fs.mkdirSync(folderName+'/files')
    }
  } catch (err) {
    console.error(err)
  }

}


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
    const id=5;
    const userType='Freelancer';
    const folderName = `/Users/joseluisparedesmunoz/Lancing/backend/uploads/Freelancer/${id}`
    createFolder(folderName)
    form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = path.join(__dirname, '/../../', `/uploads/Freelancer/${id}/images`, files.filetoupload.originalFilename);  ///uploads/images/fullsize/


router.get('/uploads/images/fullsize/:file', function (req, res){
  file = req.params.file;
  var img = fs.readFileSync(path.join(__dirname, "/uploads/images/fullsize/", file));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');

});


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


