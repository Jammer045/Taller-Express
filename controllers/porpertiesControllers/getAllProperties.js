const Propiedad = require('../../models/Propiedades');

const getAllPropiedades = async (req, res) => {
    try {
        const { nombre, tipo, valorMin, valorMax, usuario } = req.query;
        let query = {};

        if (nombre) query.nombre = new RegExp(nombre, 'i');
        if (tipo) query.tipo = new RegExp(tipo, 'i');
        if (valorMin || valorMax) {
            query.valor = {};
            if (valorMin) query.valor.$gte = parseFloat(valorMin);
            if (valorMax) query.valor.$lte = parseFloat(valorMax);
        }
        if (usuario) query.usuario = usuario;

        const propiedades = await Propiedad.find(query)
            .populate('usuario', 'nombre correo')
            .sort({ nombre: 1 });

        res.json(propiedades);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllPropiedades;