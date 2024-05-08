const jwt = require('jsonwebtoken');

// Secret key for signing and verifying JWTs
const JWT_SECRET = 'your_jwt_secret'; // Replace with your actual secret key

// Generate a JWT token
const generateToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' }); // Token expires in 1 hour
};

// Verify a JWT token
const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return { valid: true, payload: decoded };
    } catch (error) {
        return { valid: false, error: error.message };
    }
};

module.exports = { generateToken, verifyToken };