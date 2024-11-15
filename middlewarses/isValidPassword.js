const bcrypt = require('bcryptjs');

const validatePassword = async (req, res, next) => {
   try {
       const { password } = req.body;
       const storedPassword = req.account.password; 
       const isPasswordValid = await bcrypt.compare(password, storedPassword);
       
       if (!isPasswordValid) {
           return res.status(401).json({
               success: false,
               message: "El usuario o la contraseña son incorrectos"
           });
       }

       if(isPasswordValid) {delete req.account.password;}

       next();
   } catch (error) {
       res.status(500).json({
           success: false,
           message: "Error al validar la contraseña"
       });
   }
};

module.exports = validatePassword;