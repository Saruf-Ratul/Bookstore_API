// user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    // email: { type: String, required: true },
    // role: { type: String, required: true },
    // isVerified: { type: Boolean, required: true },
    // isDeleted: { type: Boolean, required: true },
    // createdAt: { type: Date, required: true },
    // updatedAt: { type: Date, required: true },
    // deletedAt: { type: Date, required: true }

});

const User = mongoose.model('User', userSchema);

module.exports = User;