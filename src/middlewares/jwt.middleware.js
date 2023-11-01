import { Strategy as JWTStrategy, ExtractJwt } from "passport-jwt";
import { config } from "../config.js";
import { User } from "../models/user.model.js";

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.jwtSecret   
}

const jwtMiddleware = (passport) => {
    passport.use(
        new JWTStrategy(
            options, 
            async (jwtPayload, done) => {
                try {

                    const user = await User.findOne({ where: { id: jwtPayload.id } });

                    if(user) return done(null,user);
                    return done(null,false);

                }catch(err){
                    return done(err, false, {message: 'Server Error'}); 
                }
            })
    );
}

export default jwtMiddleware;