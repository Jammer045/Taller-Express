const User = require('../../models/Usuarios');

const sightInUser = async (req, res) => {
    try {
        const userInfo = req.account;
        
        const user = await User.findOneAndUpdate(
            { correo: userInfo.email },
            { enLinea: true },
            { new: true }
        );

        res.json({
            msg: 'Usuario conectado exitosamente',
            user
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = sightInUser;