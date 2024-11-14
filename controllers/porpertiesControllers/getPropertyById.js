const Propiedad = require('../../models/Propiedades');

const getPropiedadById = async (req, res) => {
    try {
        const propiedad = await Propiedad.findById(req.params.id)
            .populate('usuario', 'nombre correo');
            
        if (!propiedad) {
            return res.status(404).json({ msg: "Propiedad no encontrada" });
        }
        res.json(propiedad);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getPropiedadById;