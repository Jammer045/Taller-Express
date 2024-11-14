const express = require('express');
const sightInUser = require('../controllers/auth/sight');
const accountNotExist = require('../middlewarses/acountNotExist');
const validatePassword = require('../middlewarses/isValidPassword');
const authRouter = express.Router();

authRouter.post('/login', accountNotExist, validatePassword, sightInUser);

module.exports = authRouter;