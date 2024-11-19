const express = require('express');
const sightInUser = require('../controllers/auth/sight');
const accountNotExist = require('../middlewarses/acountNotExist');
const validatePassword = require('../middlewarses/isValidPassword');
const authRouter = express.Router();
const signOutUser = require('../controllers/auth/signout');
const valideToken = require('../middlewarses/valideToken');

authRouter.post('/login', accountNotExist, validatePassword, sightInUser);
authRouter.post('/logout', valideToken, signOutUser);

module.exports = authRouter;