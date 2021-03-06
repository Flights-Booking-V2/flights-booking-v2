const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

    password:{
        type: String,
        required: true
    },
})

module.exports = User = mongoose.model('User', UserSchema);