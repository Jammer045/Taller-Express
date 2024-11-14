const express = require('express');
const router = express.Router();

const createUser = require('../controllers/usersControllers/createUser');
const getAllUsers = require('../controllers/usersControllers/getAllUsers');
const getUserById = require('../controllers/usersControllers/getUserbyId');
const updateUser = require('../controllers/usersControllers/updateUser');
const deleteUser = require('../controllers/usersControllers/deleteUser');
const validateUser = require('../middlewarses/validator');
const checkUserExists = require('../middlewarses/checkUserExist');

router.post('/create', validateUser, checkUserExists, createUser);
router.get('/Allusers', getAllUsers);
router.get('/:id', getUserById);
router.put('/:id', validateUser,updateUser);
router.delete('/:id', deleteUser);

module.exports = router;