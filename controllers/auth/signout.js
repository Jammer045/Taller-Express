const User = require('../../models/Usuarios');

const signOutUser = async (req, res) => {
    try {
        // Obtenemos el ID del usuario del token decodificado (asumiendo que está en req.user)
        const userId = req.user.id;
        
        // Actualizamos el estado enLinea a false
        const user = await User.findByIdAndUpdate(
            userId,
            { enLinea: false },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Usuario no encontrado'
            });
        }

        res.json({
            success: true,
            message: 'Sesión cerrada exitosamente'
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            error: error.message 
        });
    }
};

module.exports = signOutUser;