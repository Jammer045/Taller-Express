const Propiedad = require('../../models/Propiedades');

const createPropiedad = async (req, res) => {
    try {
        const propiedad = new Propiedad(req.body);
        await propiedad.save();
        
        const propiedadPopulada = await propiedad.populate('usuario', 'nombre correo');
        
        res.status(201).json({
            msg: "Propiedad creada exitosamente",
            propiedad: propiedadPopulada
        });
    } catch (error) {
        res.status(400).json({ 
            msg: "Error al crear propiedad",
            error: error.message 
        });
    }
};

module.exports = createPropiedad;