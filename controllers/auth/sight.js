const User = require('../../models/Usuarios');
const jwt = require('jsonwebtoken');

const sightInUser = async (req, res) => {
    try {
        const userInfo = req.account;
        
        const user = await User.findOneAndUpdate(
            { correo: userInfo.email },
            { enLinea: true },
            { new: true }
        );

        const token = jwt.sign(
            { 
                id: user._id,
                email: user.correo
            }, 
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );

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

module.exports = sightInUser;