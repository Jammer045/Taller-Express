const mongoose = require('mongoose');
const facturaSchema = require('../schemas/facturaSchema');

const Factura = mongoose.model('Factura', facturaSchema);

module.exports = Factura;