const Propiedad = require('../../models/Propiedades');

const updatePropiedad = async (req, res) => {
    try {
        const propiedad = await Propiedad.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true, runValidators: true }
        ).populate('usuario', 'nombre correo');

        if (!propiedad) {
            return res.status(404).json({ msg: "Propiedad no encontrada" });
        }
        res.json({
            msg: "Propiedad actualizada exitosamente",
            propiedad
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = updatePropiedad;