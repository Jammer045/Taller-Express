const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('La variable de entorno MONGODB_URI no está definida');
        }
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Conexión exitosa a MongoDB Atlas');
    } catch (error) {
        console.error('Error de conexión:', error.message);
        process.exit(1);
    }
};

mongoose.connection.on('connected', () => {
    console.log('Mongoose conectado a MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
    console.error('Error de Mongoose:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose desconectado de MongoDB Atlas');
});

module.exports = connectDB;