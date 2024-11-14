const User = require('../../models/Usuarios');

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }
        res.json({ 
            msg: "Usuario eliminado exitosamente",
            user 
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = deleteUser;