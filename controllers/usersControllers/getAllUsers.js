const User = require('../../models/Usuarios');

const getAllUsers = async (req, res) => {
    try {
        const { nombre, correo, enLinea } = req.query;
        let query = {};

        if (nombre) query.nombre = new RegExp(nombre, 'i');
        if (correo) query.correo = new RegExp(correo, 'i');
        if (enLinea) query.enLinea = enLinea === 'true';

        const users = await User.find(query);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getAllUsers;