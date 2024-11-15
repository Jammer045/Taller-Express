const express = require('express');
const router = express.Router();

const createPropiedad = require('../controllers/porpertiesControllers/createProperty');
const getAllPropiedades = require('../controllers/porpertiesControllers/getAllProperties');
const getPropiedadById = require('../controllers/porpertiesControllers/getPropertyById');
const updatePropiedad = require('../controllers/porpertiesControllers/updateProperty');
const deletePropiedad = require('../controllers/porpertiesControllers/deleteProperty');
const verifyToken = require('../middlewarses/generateToken');
const authenticate = require('../middlewarses/authPassport');

router.post('/create', verifyToken, authenticate, createPropiedad);
router.get('/Allproperties', verifyToken, authenticate, getAllPropiedades);
router.get('/:id', verifyToken, authenticate, getPropiedadById);
router.put('/:id', verifyToken, authenticate, updatePropiedad);
router.delete('/:id', verifyToken, authenticate, deletePropiedad);

module.exports = router;