const express = require('express');
const router = express.Router();
const userRoutes = require('./usesRouter');
const facturaRoutes = require('./factureRouters');
const propiedadRoutes = require('./propertiesRouter');
const authRoutes = require('./auth'); 

router.use('/users', userRoutes);
router.use('/facturas', facturaRoutes);
router.use('/propiedades', propiedadRoutes);
router.use('/auth', authRoutes); 

router.get('/', (req, res) => {
    res.json({
        message: 'API Funcionando correctamente',
        endpoints: {
            usuarios: '/api/users',
            facturas: '/api/facturas',
            propiedades: '/api/propiedades',
            auth: '/api/auth'
        }
    });
});

module.exports = router;