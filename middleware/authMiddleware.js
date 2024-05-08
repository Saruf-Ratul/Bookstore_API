// authMiddleware.js
const jwt = require('jsonwebtoken');
const jwtSecret = 'your-jwt-secret'; // Set your JWT secret

const requireAuth = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Authorization header is missing' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = { requireAuth };