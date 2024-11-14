const Joi = require('joi');

const userSchema = Joi.object({
    nombre: Joi.string()
        .required()
        .min(3)
        .max(50)
        .messages({
            'string.empty': 'El nombre es obligatorio',
            'string.min': 'El nombre debe tener al menos 3 caracteres',
            'string.max': 'El nombre no debe exceder los 50 caracteres'
        }),

    correo: Joi.string()
        .required()
        .email()
        .messages({
            'string.empty': 'El correo es obligatorio',
            'string.email': 'Formato de correo inválido'
        }),

    direccion: Joi.string()
        .required()
        .min(5)
        .max(100)
        .messages({
            'string.empty': 'La dirección es obligatoria',
            'string.min': 'La dirección debe tener al menos 5 caracteres',
            'string.max': 'La dirección no debe exceder los 100 caracteres'
        }),

    telefono: Joi.number()
        .required()
        .integer()
        .min(1000000000)
        .max(9999999999)
        .messages({
            'number.base': 'El teléfono debe ser un número',
            'number.integer': 'El teléfono debe ser un número entero',
            'number.min': 'El teléfono debe tener 10 dígitos',
            'number.max': 'El teléfono debe tener 10 dígitos'
        }),

    password: Joi.string()
        .required()
        .min(6)
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
        .messages({
            'string.empty': 'La contraseña es obligatoria',
            'string.min': 'La contraseña debe tener al menos 6 caracteres',
            'string.pattern.base': 'La contraseña debe contener solo letras y números'
        }),

    enLinea: Joi.boolean()
        .default(false)
});

const validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body, { abortEarly: false });
    
    if (error) {
        const errors = error.details.map(err => ({
            field: err.path[0],
            message: err.message
        }));
        return res.status(400).json({ errors });
    }
    
    next();
};

module.exports = validateUser;