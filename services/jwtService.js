// jwtService.js
const jwt = require('jsonwebtoken');
const jwtSecret = 'your-jwt-secret'; // Set your JWT secret

const generateToken = (payload) => {
    return jwt.sign(payload, jwtSecret, { expiresIn: '1h' });
};

module.exports = { generateToken };