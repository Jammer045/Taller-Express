const mongoose = require('mongoose');

const facturaSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        required: [true, 'La fecha es obligatoria'],
        default: Date.now
    },
    descripcion: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        trim: true
    },
    valor: {
        type: Number,
        required: [true, 'El valor es obligatorio'],
        min: [0, 'El valor no puede ser negativo']
    },
    activo: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El usuario es obligatorio']
    }
}, {
    timestamps: true
});

module.exports = facturaSchema;