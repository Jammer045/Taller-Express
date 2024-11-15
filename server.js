require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/database');
const router = require('./router/indexRouter');
const passport = require('passport');
require('./config/pastport');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use("/taller", router);
app.use(passport.initialize());

console.log('Verificando conexión con:', process.env.MONGODB_URI);

connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8080;
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error al iniciar la aplicación:', error);
        process.exit(1);
    });

app.get('/', (req, res) => {
    res.json({ message: '¡Servidor funcionando correctamente!' });
});