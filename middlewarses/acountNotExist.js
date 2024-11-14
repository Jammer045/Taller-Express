const User = require('../models/Usuarios');

const accountNotExist = async (req, res, next) => {
    try {
        const { correo } = req.body;

        const userExists = await User.findOne({ correo });
        
        if (!userExists) {
            return res.status(404).json({ 
                success: false,
                message: `El usuario con el correo ${correo} no existe` 
            });
        }
        
        req.account = {
            email: userExists.correo,
            password: userExists.password,
            name: userExists.nombre,
            photo: userExists.photo, 
        };
        
        next();
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: "Error al verificar el usuario" 
        });
    }
};

module.exports = accountNotExist;