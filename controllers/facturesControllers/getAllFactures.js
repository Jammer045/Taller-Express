const Factura = require('../../models/Facturas');

const getAllFacturas = async (req, res) => {
    try {
        const { fecha, valorMin, valorMax, activo, usuario } = req.query;
        let query = {};

        if (fecha) query.fecha = new Date(fecha);
        if (valorMin || valorMax) {
            query.valor = {};
            if (valorMin) query.valor.$gte = parseFloat(valorMin);
            if (valorMax) query.valor.$lte = parseFloat(valorMax);
        }
        if (activo !== undefined) query.activo = activo === 'true';
        if (usuario) query.usuario = usuario;

        const facturas = await Factura.find(query)
            .populate('usuario', 'nombre correo')
            .sort({ fecha: -1 }); 

        res.json(facturas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllFacturas;