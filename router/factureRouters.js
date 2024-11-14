const express = require('express');
const router = express.Router();

const createFactura = require('../controllers/facturesControllers/createFacture');
const getAllFacturas = require('../controllers/facturesControllers/getAllFactures');
const getFacturaById = require('../controllers/facturesControllers/getFactureById');
const updateFactura = require('../controllers/facturesControllers/updateFacture');
const deleteFactura = require('../controllers/facturesControllers/deleteFacture');

router.post('/create', createFactura);
router.get('/Allfactures', getAllFacturas);
router.get('/:id', getFacturaById);
router.put('/:id', updateFactura);
router.delete('/:id', deleteFactura);

module.exports = router;