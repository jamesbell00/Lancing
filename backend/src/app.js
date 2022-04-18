import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/freelancers.js";
import companyRoutes from "./routes/company.js";
import jobRoutes from "./routes/jobs.js";
import homeRoutes from './routes/home.js';
import profileRoutes from './routes/profilePage.js';
import jobApplicationRoutes from './routes/jobApplication.js'; 
import SearchedPage from './routes/SearchedItemPage.js'; 
import Log from './routes/login.js'; 

const multer = require('multer');

import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import { options } from "./swaggerOptions.js";

////////////////////////////////
import initWebRoutes from "./routes/initRoutes.js";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import session from "express-session";
import connectFlash from "connect-flash";
import passport from "passport";
////////////////////////////////

const app = express();
const specs = swaggerJSDoc(options);

////////////////////////////////
 

//use cookie parser
app.use(cookieParser('secret'));

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 86400000 1 day
    }
}));

// Enable body parser post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('view options', {
    layout: false
});

//Enable flash message
app.use(connectFlash());

//Config passport middleware
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
  });


////////////////////////////////
app.set("port", 3000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes);
app.use(companyRoutes);
app.use(jobRoutes);
app.use(homeRoutes);
app.use(jobApplicationRoutes);
app.use(profileRoutes);
app.use(SearchedPage);
app.use(Log);


// init all web routes
app.use(initWebRoutes)

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
    });
});

app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));


export default app;
