const mongoose = require('mongoose');

const propiedadSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        trim: true
    },
    tipo: {
        type: String,
        required: [true, 'El tipo es obligatorio'],
        trim: true
    },
    valor: {
        type: Number,
        required: [true, 'El valor es obligatorio'],
        min: [0, 'El valor no puede ser negativo']
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El usuario es obligatorio']
    }
}, {
    timestamps: true
});

module.exports = propiedadSchema;