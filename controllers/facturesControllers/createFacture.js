const Factura = require('../../models/Facturas');

const createFactura = async (req, res) => {
    try {
        const factura = new Factura(req.body);
        await factura.save();
        
        const facturaPopulada = await factura.populate('usuario', 'nombre correo');
        
        res.status(201).json({
            msg: "Factura creada exitosamente",
            factura: facturaPopulada
        });
    } catch (error) {
        res.status(400).json({ 
            msg: "Error al crear factura",
            error: error.message 
        });
    }
};

module.exports = createFactura;