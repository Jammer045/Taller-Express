const User = require('../../models/Usuarios');
const generateToken = require('../../middlewarses/generateToken');

const signInUser = async (req, res) => {
    try {
        const userInfo = req.account;
        
        const user = await User.findOneAndUpdate(
            { correo: userInfo.email },
            { enLinea: true },
            { new: true }
        );

        const token = generateToken(user);

        res.json({
            success: true,
            message: 'Usuario conectado exitosamente, token valido',
            user,
            token
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = signInUser;