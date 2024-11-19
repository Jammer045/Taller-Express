const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const token = jwt.sign(
        {
            id: user._id,
            email: user.correo
        },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
    );
    
    return token;
};

module.exports = generateToken;