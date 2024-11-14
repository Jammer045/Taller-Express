const express = require('express');
const router = express.Router();

const createPropiedad = require('../controllers/porpertiesControllers/createProperty');
const getAllPropiedades = require('../controllers/porpertiesControllers/getAllProperties');
const getPropiedadById = require('../controllers/porpertiesControllers/getPropertyById');
const updatePropiedad = require('../controllers/porpertiesControllers/updateProperty');
const deletePropiedad = require('../controllers/porpertiesControllers/deleteProperty');

router.post('/create', createPropiedad);
router.get('/Allproperties', getAllPropiedades);
router.get('/:id', getPropiedadById);
router.put('/:id', updatePropiedad);
router.delete('/:id', deletePropiedad);

module.exports = router;