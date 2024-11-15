const express = require('express');
const router = express.Router();

const createFactura = require('../controllers/facturesControllers/createFacture');
const getAllFacturas = require('../controllers/facturesControllers/getAllFactures');
const getFacturaById = require('../controllers/facturesControllers/getFactureById');
const updateFactura = require('../controllers/facturesControllers/updateFacture');
const deleteFactura = require('../controllers/facturesControllers/deleteFacture');
const verifyToken = require('../middlewarses/generateToken');
const authenticate = require('../middlewarses/authPassport');

router.post('/create', verifyToken, authenticate, createFactura);
router.get('/Allfactures', verifyToken, authenticate, getAllFacturas);
router.get('/:id', verifyToken, authenticate, getFacturaById);
router.put('/:id', verifyToken, authenticate, updateFactura);
router.delete('/:id', verifyToken, authenticate, deleteFactura);

module.exports = router;