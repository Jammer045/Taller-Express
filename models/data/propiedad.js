require('dotenv').config();
const Propiedad = require('../Propiedades');
const connectDB = require('../../config/database');

const propiedades = [
    // Propiedades de Juan Pérez (ID: 6735589be58b42d87bd3902f)
    {
        nombre: "Oficina Central",
        tipo: "Comercial",
        valor: 120000.00,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        nombre: "Departamento Centro",
        tipo: "Residencial",
        valor: 85000.00,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        nombre: "Local Comercial 1",
        tipo: "Comercial",
        valor: 95000.00,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        nombre: "Estacionamiento 15",
        tipo: "Cochera",
        valor: 15000.00,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        nombre: "Bodega Norte",
        tipo: "Industrial",
        valor: 75000.00,
        usuario: "6735589be58b42d87bd3902f"
    },

    // Propiedades de María García (ID: 6735589be58b42d87bd39030)
    {
        nombre: "Consultorio Médico",
        tipo: "Comercial",
        valor: 180000.00,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        nombre: "Casa Principal",
        tipo: "Residencial",
        valor: 250000.00,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        nombre: "Clínica Especializada",
        tipo: "Comercial",
        valor: 320000.00,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        nombre: "Departamento Playa",
        tipo: "Residencial",
        valor: 150000.00,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        nombre: "Estacionamiento Clínica",
        tipo: "Cochera",
        valor: 25000.00,
        usuario: "6735589be58b42d87bd39030"
    },

    // Propiedades de Carlos López (ID: 6735589be58b42d87bd39031)
    {
        nombre: "Terreno Industrial",
        tipo: "Industrial",
        valor: 450000.00,
        usuario: "6735589be58b42d87bd39031"
    },
    {
        nombre: "Nave Industrial",
        tipo: "Industrial",
        valor: 580000.00,
        usuario: "6735589be58b42d87bd39031"
    },
    {
        nombre: "Oficina Técnica",
        tipo: "Comercial",
        valor: 220000.00,
        usuario: "6735589be58b42d87bd39031"
    },
    {
        nombre: "Casa Familiar",
        tipo: "Residencial",
        valor: 320000.00,
        usuario: "6735589be58b42d87bd39031"
    },
    {
        nombre: "Depósito de Materiales",
        tipo: "Industrial",
        valor: 180000.00,
        usuario: "6735589be58b42d87bd39031"
    },

    // Propiedades de Ana Martínez (ID: 6735589be58b42d87bd39032)
    {
        nombre: "Estudio Fotográfico",
        tipo: "Comercial",
        valor: 160000.00,
        usuario: "6735589be58b42d87bd39032"
    },
    {
        nombre: "Galería de Arte",
        tipo: "Comercial",
        valor: 280000.00,
        usuario: "6735589be58b42d87bd39032"
    },
    {
        nombre: "Loft Urbano",
        tipo: "Residencial",
        valor: 195000.00,
        usuario: "6735589be58b42d87bd39032"
    },
    {
        nombre: "Local de Exhibición",
        tipo: "Comercial",
        valor: 145000.00,
        usuario: "6735589be58b42d87bd39032"
    },
    {
        nombre: "Almacén de Equipos",
        tipo: "Bodega",
        valor: 85000.00,
        usuario: "6735589be58b42d87bd39032"
    },

    // Propiedades de Roberto Sánchez (ID: 6735589be58b42d87bd39033)
    {
        nombre: "Gimnasio Central",
        tipo: "Comercial",
        valor: 380000.00,
        usuario: "6735589be58b42d87bd39033"
    },
    {
        nombre: "Centro Deportivo",
        tipo: "Comercial",
        valor: 450000.00,
        usuario: "6735589be58b42d87bd39033"
    },
    {
        nombre: "Casa de Campo",
        tipo: "Residencial",
        valor: 280000.00,
        usuario: "6735589be58b42d87bd39033"
    },
    {
        nombre: "Local de Suplementos",
        tipo: "Comercial",
        valor: 120000.00,
        usuario: "6735589be58b42d87bd39033"
    },
    {
        nombre: "Bodega Deportiva",
        tipo: "Bodega",
        valor: 95000.00,
        usuario: "6735589be58b42d87bd39033"
    },

    // Propiedades de Laura Torres (ID: 6735589be58b42d87bd39034)
    {
        nombre: "Pastelería Principal",
        tipo: "Comercial",
        valor: 220000.00,
        usuario: "6735589be58b42d87bd39034"
    },
    {
        nombre: "Local de Eventos",
        tipo: "Comercial",
        valor: 185000.00,
        usuario: "6735589be58b42d87bd39034"
    },
    {
        nombre: "Casa Habitación",
        tipo: "Residencial",
        valor: 245000.00,
        usuario: "6735589be58b42d87bd39034"
    },
    {
        nombre: "Sucursal Centro",
        tipo: "Comercial",
        valor: 175000.00,
        usuario: "6735589be58b42d87bd39034"
    },
    {
        nombre: "Almacén de Insumos",
        tipo: "Bodega",
        valor: 80000.00,
        usuario: "6735589be58b42d87bd39034"
    },

    // Propiedades de Diego Ramírez (ID: 6735589be58b42d87bd39035)
    {
        nombre: "Taller Mecánico",
        tipo: "Industrial",
        valor: 280000.00,
        usuario: "6735589be58b42d87bd39035"
    },
    {
        nombre: "Centro de Servicio",
        tipo: "Comercial",
        valor: 320000.00,
        usuario: "6735589be58b42d87bd39035"
    },
    {
        nombre: "Departamento",
        tipo: "Residencial",
        valor: 150000.00,
        usuario: "6735589be58b42d87bd39035"
    },
    {
        nombre: "Almacén de Repuestos",
        tipo: "Bodega",
        valor: 110000.00,
        usuario: "6735589be58b42d87bd39035"
    },
    {
        nombre: "Estacionamiento Taller",
        tipo: "Cochera",
        valor: 45000.00,
        usuario: "6735589be58b42d87bd39035"
    },

    // Propiedades de Patricia Flores (ID: 6735589be58b42d87bd39036)
    {
        nombre: "Estudio de Diseño",
        tipo: "Comercial",
        valor: 190000.00,
        usuario: "6735589be58b42d87bd39036"
    },
    {
        nombre: "Showroom",
        tipo: "Comercial",
        valor: 245000.00,
        usuario: "6735589be58b42d87bd39036"
    },
    {
        nombre: "Casa Estudio",
        tipo: "Mixto",
        valor: 285000.00,
        usuario: "6735589be58b42d87bd39036"
    },
    {
        nombre: "Local de Exposición",
        tipo: "Comercial",
        valor: 165000.00,
        usuario: "6735589be58b42d87bd39036"
    },
    {
        nombre: "Bodega de Materiales",
        tipo: "Bodega",
        valor: 75000.00,
        usuario: "6735589be58b42d87bd39036"
    },

    // Propiedades de Miguel Herrera (ID: 6735589be58b42d87bd39037)
    {
        nombre: "Estudio de Grabación",
        tipo: "Comercial",
        valor: 420000.00,
        usuario: "6735589be58b42d87bd39037"
    },
    {
        nombre: "Sala de Ensayo",
        tipo: "Comercial",
        valor: 180000.00,
        usuario: "6735589be58b42d87bd39037"
    },
    {
        nombre: "Casa con Estudio",
        tipo: "Mixto",
        valor: 350000.00,
        usuario: "6735589be58b42d87bd39037"
    },
    {
        nombre: "Local de Instrumentos",
        tipo: "Comercial",
        valor: 195000.00,
        usuario: "6735589be58b42d87bd39037"
    },
    {
        nombre: "Almacén de Equipos",
        tipo: "Bodega",
        valor: 120000.00,
        usuario: "6735589be58b42d87bd39037"
    },

    // Propiedades de Carmen Ruiz (ID: 6735589be58b42d87bd39038)
    {
        nombre: "Centro Educativo",
        tipo: "Institucional",
        valor: 580000.00,
        usuario: "6735589be58b42d87bd39038"
    },
    {
        nombre: "Biblioteca",
        tipo: "Institucional",
        valor: 320000.00,
        usuario: "6735589be58b42d87bd39038"
    },
    {
        nombre: "Casa Principal",
        tipo: "Residencial",
        valor: 290000.00,
        usuario: "6735589be58b42d87bd39038"
    },
    {
        nombre: "Campo Deportivo",
        tipo: "Institucional",
        valor: 250000.00,
        usuario: "6735589be58b42d87bd39038"
    },
    {
        nombre: "Almacén Educativo",
        tipo: "Bodega",
        valor: 85000.00,
        usuario: "6735589be58b42d87bd39038"
    }
];

const seedPropiedades = async () => {
    try {
        await connectDB();
        console.log('Conexión a la base de datos establecida');

        await Propiedad.deleteMany({});
        console.log('Colección de propiedades limpiada');

        await Propiedad.insertMany(propiedades);
        console.log(`${propiedades.length} propiedades creadas exitosamente`);

    } catch (error) {
        console.error('Error durante el seed:', error);
    } finally {
        process.exit();
    }
};

seedPropiedades();