const Factura = require('../../models/Facturas');
const getFacturaById = async (req, res) => {
    try {
        const factura = await Factura.findById(req.params.id)
            .populate('usuario', 'nombre correo');
            
        if (!factura) {
            return res.status(404).json({ msg: "Factura no encontrada" });
        }
        res.json(factura);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getFacturaById;