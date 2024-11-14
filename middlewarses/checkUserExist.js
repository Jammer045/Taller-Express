const User = require('../models/Usuarios');

const checkUserExists = async (req, res, next) => {
   try {
       const userExists = await User.findOne({ correo: req.body.correo });
       
       if (userExists) {
           return res.status(400).json({ 
               error: `Ya existe un usuario registrado con el correo ${req.body.correo}`
           });
       }
       
       next();
   } catch (error) {
       res.status(500).json({ error: "Error al verificar el usuario" });
   }
};

module.exports = checkUserExists;