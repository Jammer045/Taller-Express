const User = require('../../models/Usuarios');

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }
        res.json({
            msg: "Usuario actualizado exitosamente",
            user
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = updateUser;