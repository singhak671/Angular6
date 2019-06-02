const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullName: {
        type: String
    },
    email: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
}, { timestamps: true })

module.exports = mongoose.model('user', userSchema, 'user');