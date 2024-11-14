const mongoose = require('mongoose');
const userSchema = require('../schemas/userSchema');
const hashPassword = require('../middlewarses/hashPasword');

userSchema.pre('save', hashPassword);

const User = mongoose.model('User', userSchema);

module.exports = User;