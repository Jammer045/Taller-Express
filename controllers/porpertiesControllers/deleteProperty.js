const Propiedad = require('../../models/Propiedades');

const deletePropiedad = async (req, res) => {
    try {
        const propiedad = await Propiedad.findByIdAndDelete(req.params.id)
            .populate('usuario', 'nombre correo');
            
        if (!propiedad) {
            return res.status(404).json({ msg: "Propiedad no encontrada" });
        }
        res.json({ 
            msg: "Propiedad eliminada exitosamente",
            propiedad 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deletePropiedad;