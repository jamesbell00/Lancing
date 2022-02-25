import passportLocal from "passport-local";
import passport from "passport";
import {findUserByEmail, comparePassword, findUserById} from "../services/loginService.js";

let LocalStrategy = passportLocal.Strategy;

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
                    if (!user) {
                        console.log("user not found")
                        return done(null, false, req.flash("errors", `This user email "${email}" doesn't exist`));
                    }
                    if (user) {
                        console.log("user found")
                        let match = await comparePassword(password, user);
                        if (match === true) {
                            return done(null, user, null)
                        } else {
                            return done(null, false, req.flash("errors", match)
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

