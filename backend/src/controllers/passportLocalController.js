import passportLocal from "passport-local";
import passport from "passport";
import {findUserByEmail, comparePassword, findUserById} from "../services/loginService.js";
//const bycrypt=require("bycryptjs");

let LocalStrategy = passportLocal.Strategy;


/*module.exports = function(passport) {
passport.use(
    new LocalStrategy((username,password,done)=>{
        User.findOne({username: username}, (err,user)=>{
            if(err) throw err;
            if (!user) return done(null, false);
            bycrypt.compare(password, user.password, (err,result)=>{
                if(err) throw err;
                if(result===true){
                     return done(null,user);
                }
                else{
                    return done(null,false);
                }
            })
        })
    })
)
passport.serializeUser((user, cb) => {
    cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
    User.findOne({_id: id}, (err,user)=> {
        cb(err,user);
    });
});
}*/

export const initPassportLocal = () => {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        async (req, email, password, done) => {
            try {
                console.log("init passport local 1")
                await findUserByEmail(email).then(async (user) => {
                    const s=user;
                    if (!user) {
                        console.log("user not found")
                        return done(null, false, req.flash("errors", `This user email "${email}" doesn't exist`));
                    }
                    if (user) {
                        console.log("user found")
                        //let match = await comparePassword(password, user);
                        console.log(password)
                        console.log(user.password)//typeof(user.password))
                        //if (match === true) {
                        if(password==user.password){
                            return done(null, s, null)
                        } else {
                            return done(null, false, req.flash("errors")//, match)
                            )
                        }
                    }
                });
            } catch (err) {
                console.log(err);
                return done(null, false, { message: err });
            }
        }));

};



passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    findUserById(id).then((user) => {
        return done(null, user);
    }).catch(error => {
        return done(error, null)
    });
});


