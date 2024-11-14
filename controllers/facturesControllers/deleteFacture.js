const Factura = require('../../models/Facturas');

const deleteFactura = async (req, res) => {
    try {
        const factura = await Factura.findByIdAndDelete(req.params.id)
            .populate('usuario', 'nombre correo');
            
        if (!factura) {
            return res.status(404).json({ msg: "Factura no encontrada" });
        }
        res.json({ 
            msg: "Factura eliminada exitosamente",
            factura 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteFactura;