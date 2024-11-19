const express = require('express');
const router = express.Router();

const createUser = require('../controllers/usersControllers/createUser');
const getAllUsers = require('../controllers/usersControllers/getAllUsers');
const getUserById = require('../controllers/usersControllers/getUserbyId');
const updateUser = require('../controllers/usersControllers/updateUser');
const deleteUser = require('../controllers/usersControllers/deleteUser');
const validateUser = require('../middlewarses/validator');
const checkUserExists = require('../middlewarses/checkUserExist');
const verifyToken = require('../middlewarses/valideToken');
const authenticate = require('../middlewarses/authPassport');

router.post('/create', validateUser, checkUserExists, verifyToken, authenticate,createUser);
router.get('/Allusers', verifyToken, authenticate,getAllUsers);
router.get('/:id', verifyToken, authenticate, getUserById);
router.put('/:id', validateUser, verifyToken, authenticate, updateUser);
router.delete('/:id', verifyToken, authenticate, deleteUser);

module.exports = router;