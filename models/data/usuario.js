require('dotenv').config();
const User = require('../Usuarios');
const connectDB = require('../../config/database');

const users = [
    {
        nombre: "Juan Pérez",
        correo: "juan.perez@gmail.com",
        direccion: "Av. Principal 123, Ciudad",
        telefono: 1234567890,
        password: "password123",
        enLinea: false
    },
    {
        nombre: "María García",
        correo: "maria.garcia@gmail.com",
        direccion: "Calle 45 #789, Villa",
        telefono: 2345678901,
        password: "password456",
        enLinea: false
    },
    {
        nombre: "Carlos López",
        correo: "carlos.lopez@hotmail.com",
        direccion: "Carrera 67 #234, Barrio Norte",
        telefono: 3456789012,
        password: "password789",
        enLinea: false
    },
    {
        nombre: "Ana Martínez",
        correo: "ana.martinez@yahoo.com",
        direccion: "Plaza Central 456, Centro",
        telefono: 4567890123,
        password: "passwordabc",
        enLinea: false
    },
    {
        nombre: "Roberto Sánchez",
        correo: "roberto.sanchez@gmail.com",
        direccion: "Avenida 78 #901, Sur",
        telefono: 5678901234,
        password: "passworddef",
        enLinea: false
    },
    {
        nombre: "Laura Torres",
        correo: "laura.torres@hotmail.com",
        direccion: "Boulevard 234 #567, Este",
        telefono: 6789012345,
        password: "passwordghi",
        enLinea: false
    },
    {
        nombre: "Diego Ramírez",
        correo: "diego.ramirez@gmail.com",
        direccion: "Pasaje 890 #123, Oeste",
        telefono: 7890123456,
        password: "passwordjkl",
        enLinea: false
    },
    {
        nombre: "Patricia Flores",
        correo: "patricia.flores@yahoo.com",
        direccion: "Calle 12 #345, Norte",
        telefono: 8901234567,
        password: "passwordmno",
        enLinea: false
    },
    {
        nombre: "Miguel Herrera",
        correo: "miguel.herrera@gmail.com",
        direccion: "Avenida Central 567, Centro",
        telefono: 9012345678,
        password: "passwordpqr",
        enLinea: false
    },
    {
        nombre: "Carmen Ruiz",
        correo: "carmen.ruiz@hotmail.com",
        direccion: "Plaza Mayor 789, Villa Nueva",
        telefono: 1234567809,
        password: "passwordstu",
        enLinea: false
    }
];

const seedUsers = async () => {
    try {
      
        await connectDB();
        console.log('Conexión a la base de datos establecida');

   
        await User.deleteMany({});
        console.log('Colección de usuarios limpiada');

   
        const insertedUsers = await User.insertMany(users);
        console.log(`${insertedUsers.length} usuarios insertados correctamente`);

      
        insertedUsers.forEach(user => {
            console.log(`Usuario: ${user.nombre}, ID: ${user._id}`);
        });

    } catch (error) {
        console.error('Error durante el seed:', error);
    } finally {

        process.exit();
    }
};

seedUsers();