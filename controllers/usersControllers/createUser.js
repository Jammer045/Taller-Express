const User = require('../../models/Usuarios.js');

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({
            msg: "Usuario creado exitosamente",
            user
        });
    } catch (error) {
        res.status(400).json({ 
            msg: "Error al crear usuario",
            error: error.message 
        });
    }
};

module.exports = createUser;