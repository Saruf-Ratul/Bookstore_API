// authController.js
const User = require('../models/user');
const jwtService = require('../services/jwtService');

const login = async(req, res) => {
    const { username, password } = req.body;

    try {
        // Check if the username and password are valid
        const user = await User.findOne({ username, password });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Generate JWT token
        const token = jwtService.generateToken({ userId: user._id });

        // Send the token as a response
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { login };