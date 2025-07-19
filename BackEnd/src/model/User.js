const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: 6,
        unique: true,
        required: true
    },
    email: {
        type: String,
        minlength: 6,
        unique: true,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true
    },
    sex: {
        type: Boolean,
        default: true
    },
    address: {
        type: String,
    },

    role: {
        type: String,
        enum: ['user', 'doctor', 'admin'],
        default: 'user'
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
