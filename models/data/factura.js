require('dotenv').config();
const Factura = require('../Facturas');
const connectDB = require('../../config/database');

const facturas = [
    {
        fecha: new Date('2024-01-05'),
        descripcion: "Compra de materiales de oficina",
        valor: 150.50,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"  // ID de Juan Pérez
    },
    {
        fecha: new Date('2024-01-10'),
        descripcion: "Pago servicios de internet",
        valor: 89.99,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-01-15'),
        descripcion: "Mantenimiento equipos",
        valor: 250.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-01-20'),
        descripcion: "Servicios de limpieza",
        valor: 120.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-01-25'),
        descripcion: "Suministros varios",
        valor: 175.30,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-02-01'),
        descripcion: "Pago de telefonía",
        valor: 65.99,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-02-05'),
        descripcion: "Material de empaque",
        valor: 320.45,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-02-10'),
        descripcion: "Servicios de mensajería",
        valor: 45.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-02-15'),
        descripcion: "Papelería corporativa",
        valor: 230.75,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-02-20'),
        descripcion: "Mantenimiento aire acondicionado",
        valor: 180.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-02-25'),
        descripcion: "Servicios de seguridad",
        valor: 450.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-03-01'),
        descripcion: "Materiales de limpieza",
        valor: 95.80,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-03-05'),
        descripcion: "Servicios de consultoría",
        valor: 750.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-03-10'),
        descripcion: "Equipos de oficina",
        valor: 1200.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-03-15'),
        descripcion: "Servicios de marketing",
        valor: 550.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-03-20'),
        descripcion: "Suministros de cafetería",
        valor: 85.25,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-03-25'),
        descripcion: "Mantenimiento software",
        valor: 299.99,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-04-01'),
        descripcion: "Servicios de capacitación",
        valor: 420.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-04-05'),
        descripcion: "Material publicitario",
        valor: 280.50,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-04-10'),
        descripcion: "Servicios legales",
        valor: 800.00,
        activo: true,
        usuario: "6735589be58b42d87bd3902f"
    },
    {
        fecha: new Date('2024-01-03'),
        descripcion: "Compra de equipo médico",
        valor: 2500.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"  // ID de María García
    },
    {
        fecha: new Date('2024-01-08'),
        descripcion: "Suministros hospitalarios",
        valor: 750.30,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-01-15'),
        descripcion: "Material de laboratorio",
        valor: 1200.50,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-01-22'),
        descripcion: "Servicios de esterilización",
        valor: 450.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-01-29'),
        descripcion: "Insumos médicos",
        valor: 890.75,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-02-05'),
        descripcion: "Mantenimiento equipos médicos",
        valor: 1500.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-02-12'),
        descripcion: "Material quirúrgico",
        valor: 2100.25,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-02-19'),
        descripcion: "Productos farmacéuticos",
        valor: 1750.80,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-02-26'),
        descripcion: "Uniformes médicos",
        valor: 380.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-03-04'),
        descripcion: "Equipos de diagnóstico",
        valor: 3200.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-03-11'),
        descripcion: "Material de curación",
        valor: 625.40,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-03-18'),
        descripcion: "Servicios de laboratorio",
        valor: 950.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-03-25'),
        descripcion: "Actualización software médico",
        valor: 1800.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-04-01'),
        descripcion: "Materiales desechables",
        valor: 420.90,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-04-08'),
        descripcion: "Equipo de protección",
        valor: 680.30,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-04-15'),
        descripcion: "Calibración de equipos",
        valor: 890.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-04-22'),
        descripcion: "Suministros de oficina médica",
        valor: 245.60,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-04-29'),
        descripcion: "Mantenimiento instalaciones",
        valor: 1200.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-05-06'),
        descripcion: "Capacitación personal médico",
        valor: 1500.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
    {
        fecha: new Date('2024-05-13'),
        descripcion: "Servicios especializados",
        valor: 2800.00,
        activo: true,
        usuario: "6735589be58b42d87bd39030"
    },
        {
            fecha: new Date('2024-01-05'),
            descripcion: "Materiales de construcción",
            valor: 3500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"  // ID de Carlos López
        },
        {
            fecha: new Date('2024-01-12'),
            descripcion: "Alquiler de maquinaria",
            valor: 2800.50,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-01-19'),
            descripcion: "Cemento y agregados",
            valor: 1850.75,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-01-26'),
            descripcion: "Herramientas eléctricas",
            valor: 950.25,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-02-02'),
            descripcion: "Equipo de seguridad",
            valor: 680.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-02-09'),
            descripcion: "Servicios de transporte",
            valor: 1200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-02-16'),
            descripcion: "Material eléctrico",
            valor: 2300.30,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-02-23'),
            descripcion: "Servicios de arquitectura",
            valor: 4500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-03-01'),
            descripcion: "Acabados y pinturas",
            valor: 1750.60,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-03-08'),
            descripcion: "Materiales de plomería",
            valor: 890.45,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-03-15'),
            descripcion: "Servicios de instalación",
            valor: 2100.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-03-22'),
            descripcion: "Material de carpintería",
            valor: 1600.80,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-03-29'),
            descripcion: "Permisos de construcción",
            valor: 750.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-04-05'),
            descripcion: "Servicios topográficos",
            valor: 1800.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-04-12'),
            descripcion: "Material de aislamiento",
            valor: 920.40,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-04-19'),
            descripcion: "Servicios de diseño",
            valor: 3200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-04-26'),
            descripcion: "Estructuras metálicas",
            valor: 5500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-05-03'),
            descripcion: "Mano de obra especializada",
            valor: 2800.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-05-10'),
            descripcion: "Material de techado",
            valor: 4200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-05-17'),
            descripcion: "Consultorías técnicas",
            valor: 1900.00,
            activo: true,
            usuario: "6735589be58b42d87bd39031"
        },
        {
            fecha: new Date('2024-01-04'),
            descripcion: "Equipos de fotografía",
            valor: 4200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"  // ID de Ana Martínez
        },
        {
            fecha: new Date('2024-01-11'),
            descripcion: "Software de edición",
            valor: 890.50,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-01-18'),
            descripcion: "Iluminación profesional",
            valor: 1500.75,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-01-25'),
            descripcion: "Alquiler de estudio",
            valor: 750.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-02-01'),
            descripcion: "Accesorios de cámara",
            valor: 620.30,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-02-08'),
            descripcion: "Impresión fotográfica",
            valor: 380.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-02-15'),
            descripcion: "Equipo de video",
            valor: 3200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-02-22'),
            descripcion: "Servicios de retoque",
            valor: 450.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-03-01'),
            descripcion: "Lentes profesionales",
            valor: 2800.90,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-03-08'),
            descripcion: "Material de backdrop",
            valor: 290.45,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-03-15'),
            descripcion: "Curso de fotografía",
            valor: 550.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-03-22'),
            descripcion: "Equipo de audio",
            valor: 980.60,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-03-29'),
            descripcion: "Almacenamiento digital",
            valor: 420.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-04-05'),
            descripcion: "Dron para fotografía",
            valor: 1900.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-04-12'),
            descripcion: "Servicios de asistente",
            valor: 350.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-04-19'),
            descripcion: "Marketing digital",
            valor: 680.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-04-26'),
            descripcion: "Seguro de equipos",
            valor: 790.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-05-03'),
            descripcion: "Material de empaque",
            valor: 250.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-05-10'),
            descripcion: "Accesorios de estudio",
            valor: 430.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-05-17'),
            descripcion: "Mantenimiento equipos",
            valor: 520.00,
            activo: true,
            usuario: "6735589be58b42d87bd39032"
        },
        {
            fecha: new Date('2024-01-05'),
            descripcion: "Equipos de gimnasio",
            valor: 5500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"  // ID de Roberto Sánchez
        },
        {
            fecha: new Date('2024-01-12'),
            descripcion: "Suplementos deportivos",
            valor: 850.30,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-01-19'),
            descripcion: "Material de entrenamiento",
            valor: 1200.75,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-01-26'),
            descripcion: "Software de seguimiento",
            valor: 450.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-02-02'),
            descripcion: "Equipo cardiovascular",
            valor: 3800.60,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-02-09'),
            descripcion: "Indumentaria deportiva",
            valor: 780.25,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-02-16'),
            descripcion: "Mantenimiento equipos",
            valor: 650.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-02-23'),
            descripcion: "Capacitación personal",
            valor: 1200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-03-01'),
            descripcion: "Sistema de sonido",
            valor: 2300.50,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-03-08'),
            descripcion: "Material de rehabilitación",
            valor: 920.80,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-03-15'),
            descripcion: "Equipos de medición",
            valor: 480.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-03-22'),
            descripcion: "Marketing deportivo",
            valor: 750.40,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-03-29'),
            descripcion: "Servicios de limpieza",
            valor: 380.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-04-05'),
            descripcion: "Equipos de peso libre",
            valor: 2800.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-04-12'),
            descripcion: "Material sanitario",
            valor: 420.90,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-04-19'),
            descripcion: "Seguro de instalaciones",
            valor: 1500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-04-26'),
            descripcion: "Equipos de boxeo",
            valor: 980.30,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-05-03'),
            descripcion: "Sistemas de ventilación",
            valor: 1800.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-05-10'),
            descripcion: "Accesorios deportivos",
            valor: 590.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-05-17'),
            descripcion: "Certificaciones fitness",
            valor: 850.00,
            activo: true,
            usuario: "6735589be58b42d87bd39033"
        },
        {
            fecha: new Date('2024-01-05'),
            descripcion: "Insumos de pastelería",
            valor: 980.50,
            activo: true,
            usuario: "6735589be58b42d87bd39034"  // ID de Laura Torres
        },
        {
            fecha: new Date('2024-01-12'),
            descripcion: "Equipos de horneado",
            valor: 3500.75,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-01-19'),
            descripcion: "Materias primas premium",
            valor: 750.30,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-01-26'),
            descripcion: "Moldes especializados",
            valor: 420.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-02-02'),
            descripcion: "Empaques y decoración",
            valor: 380.25,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-02-09'),
            descripcion: "Curso de repostería",
            valor: 1200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-02-16'),
            descripcion: "Refrigeración industrial",
            valor: 4200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-02-23'),
            descripcion: "Utensilios profesionales",
            valor: 890.60,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-03-01'),
            descripcion: "Chocolatería fina",
            valor: 650.80,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-03-08'),
            descripcion: "Marketing gastronómico",
            valor: 580.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-03-15'),
            descripcion: "Elementos decorativos",
            valor: 320.45,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-03-22'),
            descripcion: "Batidora industrial",
            valor: 2800.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-03-29'),
            descripcion: "Uniformes de cocina",
            valor: 450.90,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-04-05'),
            descripcion: "Fotografía de producto",
            valor: 680.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-04-12'),
            descripcion: "Material de empaque",
            valor: 290.30,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-04-19'),
            descripcion: "Servicio de delivery",
            valor: 450.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-04-26'),
            descripcion: "Mantenimiento equipos",
            valor: 780.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-05-03'),
            descripcion: "Capacitación personal",
            valor: 950.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-05-10'),
            descripcion: "Software de gestión",
            valor: 520.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-05-17'),
            descripcion: "Certificación sanitaria",
            valor: 380.00,
            activo: true,
            usuario: "6735589be58b42d87bd39034"
        },
        {
            fecha: new Date('2024-01-05'),
            descripcion: "Equipos de mecánica",
            valor: 4800.00,
            activo: true,
            usuario: "6735589be58b42d87bd39035"  // ID de Diego Ramírez
        },
        {
            fecha: new Date('2024-01-12'),
            descripcion: "Herramientas especializadas",
            valor: 2300.50,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-01-19'),
            descripcion: "Scanner diagnóstico",
            valor: 1850.75,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-01-26'),
            descripcion: "Elevador hidráulico",
            valor: 5500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-02-02'),
            descripcion: "Repuestos varios",
            valor: 980.30,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-02-09'),
            descripcion: "Equipo de pintura automotriz",
            valor: 3200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-02-16'),
            descripcion: "Sistema de alineación",
            valor: 4200.60,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-02-23'),
            descripcion: "Compresor industrial",
            valor: 1750.00,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-03-01'),
            descripcion: "Software automotriz",
            valor: 890.45,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-03-08'),
            descripcion: "Equipos de soldadura",
            valor: 2100.80,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-03-15'),
            descripcion: "Material de seguridad",
            valor: 580.25,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-03-22'),
            descripcion: "Curso especialización",
            valor: 1200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-03-29'),
            descripcion: "Sistema de ventilación",
            valor: 1850.30,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-04-05'),
            descripcion: "Herramientas neumáticas",
            valor: 2400.00,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-04-12'),
            descripcion: "Equipo de diagnóstico eléctrico",
            valor: 3100.90,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-04-19'),
            descripcion: "Uniformes de trabajo",
            valor: 450.00,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-04-26'),
            descripcion: "Sistema de gestión taller",
            valor: 780.50,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-05-03'),
            descripcion: "Calibración equipos",
            valor: 920.00,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-05-10'),
            descripcion: "Materiales consumibles",
            valor: 680.40,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-05-17'),
            descripcion: "Certificación técnica",
            valor: 850.00,
            activo: true,
            usuario: "6735589be58b42d87bd39035"
        },
        {
            fecha: new Date('2024-01-05'),
            descripcion: "Mobiliario de diseño",
            valor: 5800.00,
            activo: true,
            usuario: "6735589be58b42d87bd39036"  // ID de Patricia Flores
        },
        {
            fecha: new Date('2024-01-12'),
            descripcion: "Software de arquitectura",
            valor: 2100.50,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-01-19'),
            descripcion: "Materiales decorativos",
            valor: 1850.75,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-01-26'),
            descripcion: "Iluminación de interiores",
            valor: 3200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-02-02'),
            descripcion: "Textiles de lujo",
            valor: 2800.30,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-02-09'),
            descripcion: "Equipo de renderizado",
            valor: 4500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-02-16'),
            descripcion: "Muestras de materiales",
            valor: 780.60,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-02-23'),
            descripcion: "Servicios de ploteo",
            valor: 450.00,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-03-01'),
            descripcion: "Accesorios decorativos",
            valor: 1890.45,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-03-08'),
            descripcion: "Marketing digital",
            valor: 950.80,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-03-15'),
            descripcion: "Capacitación diseño",
            valor: 1580.25,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-03-22'),
            descripcion: "Equipos de medición",
            valor: 680.00,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-03-29'),
            descripcion: "Catálogos especializados",
            valor: 420.30,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-04-05'),
            descripcion: "Servicios fotográficos",
            valor: 890.00,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-04-12'),
            descripcion: "Muebles de exhibición",
            valor: 3100.90,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-04-19'),
            descripcion: "Herramientas de diseño",
            valor: 750.00,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-04-26'),
            descripcion: "Servicio de consultoría",
            valor: 1780.50,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-05-03'),
            descripcion: "Software de modelado 3D",
            valor: 2920.00,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-05-10'),
            descripcion: "Material de oficina",
            valor: 380.40,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-05-17'),
            descripcion: "Suscripciones profesionales",
            valor: 650.00,
            activo: true,
            usuario: "6735589be58b42d87bd39036"
        },
        {
            fecha: new Date('2024-01-05'),
            descripcion: "Equipo de sonido profesional",
            valor: 8500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39037"  // ID de Miguel Herrera
        },
        {
            fecha: new Date('2024-01-12'),
            descripcion: "Software de producción musical",
            valor: 2300.50,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-01-19'),
            descripcion: "Instrumentos musicales",
            valor: 4850.75,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-01-26'),
            descripcion: "Micrófonos de estudio",
            valor: 3200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-02-02'),
            descripcion: "Interfaces de audio",
            valor: 1800.30,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-02-09'),
            descripcion: "Acústica de estudio",
            valor: 5500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-02-16'),
            descripcion: "Monitores de referencia",
            valor: 2780.60,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-02-23'),
            descripcion: "Cables y conectores",
            valor: 650.00,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-03-01'),
            descripcion: "Plugins de audio",
            valor: 1290.45,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-03-08'),
            descripcion: "Servicio de masterización",
            valor: 950.80,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-03-15'),
            descripcion: "Curso de producción",
            valor: 1580.25,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-03-22'),
            descripcion: "Hardware de procesamiento",
            valor: 3680.00,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-03-29'),
            descripcion: "Mantenimiento equipos",
            valor: 820.30,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-04-05'),
            descripcion: "Sistema de backup",
            valor: 1890.00,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-04-12'),
            descripcion: "Licencias DAW",
            valor: 2100.90,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-04-19'),
            descripcion: "Marketing digital",
            valor: 750.00,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-04-26'),
            descripcion: "Consultoría acústica",
            valor: 1780.50,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-05-03'),
            descripcion: "Equipos de grabación móvil",
            valor: 4920.00,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-05-10'),
            descripcion: "Suscripciones servicios streaming",
            valor: 380.40,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-05-17'),
            descripcion: "Seguro de equipos",
            valor: 1650.00,
            activo: true,
            usuario: "6735589be58b42d87bd39037"
        },
        {
            fecha: new Date('2024-01-05'),
            descripcion: "Compra de libros educativos",
            valor: 1500.00,
            activo: true,
            usuario: "6735589be58b42d87bd39038"  // ID de Carmen Ruiz
        },
        {
            fecha: new Date('2024-01-12'),
            descripcion: "Material didáctico",
            valor: 850.50,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-01-19'),
            descripcion: "Equipos multimedia",
            valor: 2850.75,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-01-26'),
            descripcion: "Software educativo",
            valor: 1200.00,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-02-02'),
            descripcion: "Mobiliario escolar",
            valor: 3800.30,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-02-09'),
            descripcion: "Material de papelería",
            valor: 450.00,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-02-16'),
            descripcion: "Recursos pedagógicos",
            valor: 780.60,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-02-23'),
            descripcion: "Proyector y pantalla",
            valor: 2650.00,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-03-01'),
            descripcion: "Suscripciones educativas",
            valor: 590.45,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-03-08'),
            descripcion: "Capacitación docente",
            valor: 1250.80,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-03-15'),
            descripcion: "Material de laboratorio",
            valor: 1980.25,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-03-22'),
            descripcion: "Equipos de computación",
            valor: 4680.00,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-03-29'),
            descripcion: "Material deportivo",
            valor: 920.30,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-04-05'),
            descripcion: "Biblioteca digital",
            valor: 1590.00,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-04-12'),
            descripcion: "Plataforma e-learning",
            valor: 2100.90,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-04-19'),
            descripcion: "Material artístico",
            valor: 750.00,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-04-26'),
            descripcion: "Instrumentos musicales",
            valor: 1780.50,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-05-03'),
            descripcion: "Equipos de sonido",
            valor: 1920.00,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-05-10'),
            descripcion: "Material de oficina",
            valor: 380.40,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        },
        {
            fecha: new Date('2024-05-17'),
            descripcion: "Servicios de limpieza",
            valor: 650.00,
            activo: true,
            usuario: "6735589be58b42d87bd39038"
        }
    ];

    const seedFacturas = async () => {
        try {
            await connectDB();
            console.log('Conexión a la base de datos establecida');
    
            await Factura.deleteMany({});
            console.log('Colección de facturas limpiada');
    
            await Factura.insertMany(facturas);
    
            console.log(`${facturas.length} facturas creadas exitosamente`);
    
        } catch (error) {
            console.error('Error durante el seed:', error);
        } finally {
            process.exit();
        }
    };
    
    seedFacturas();