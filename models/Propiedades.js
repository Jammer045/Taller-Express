const mongoose = require('mongoose');
const propiedadSchema = require('../schemas/propiedadSchema');

const Propiedad = mongoose.model('Propiedad', propiedadSchema);

module.exports = Propiedad;