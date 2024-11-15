const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const User = require('../models/Usuarios');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

passport.use(
    new Strategy(opts, async (jwt_payload, done) => {
        try {
            const user = await User.findOne({ email: jwt_payload.email });
            
            if (!user) {
                return done(null, false);
            }
            
            return done(null, user);
            
        } catch (error) {
            return done(error, false);
        }
    })
);

module.exports = passport;