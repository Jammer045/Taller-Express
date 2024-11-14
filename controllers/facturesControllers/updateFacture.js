const Factura = require('../../models/Facturas');

const updateFactura = async (req, res) => {
    try {
        const factura = await Factura.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true, runValidators: true }
        ).populate('usuario', 'nombre correo');

        if (!factura) {
            return res.status(404).json({ msg: "Factura no encontrada" });
        }
        res.json({
            msg: "Factura actualizada exitosamente",
            factura
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = updateFactura;