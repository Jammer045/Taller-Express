const express = require('express');
const sightInUser = require('../controllers/auth/sight');
const accountNotExist = require('../middlewarses/acountNotExist');
const validatePassword = require('../middlewarses/isValidPassword');
const authRouter = express.Router();
const signOutUser = require('../controllers/auth/signout');
const valideToken = require('../middlewarses/valideToken');
const passport = require('../middlewarses/passportGoogle');
const signInUser = require('../controllers/auth/signIn-Google');
const generateToken = require('../middlewarses/generateToken');

authRouter.post('/login', accountNotExist, validatePassword, sightInUser);
authRouter.post('/logout', valideToken, signOutUser);
authRouter.get('/login/google', passport.authenticate('google', { session: false, scope: ['email', 'profile'] }));
authRouter.get('/login/google/callback', passport.authenticate('google', { session: false, failureRedirect: '/taller/auth/login' }), (req, res) => {
    res.redirect('/taller/auth/login'); 
})

module.exports = authRouter;