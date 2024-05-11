// authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /auth/login
router.post('/login', authController.login);

// POST /auth/register

router.post('/register', authController.register);


// Azure AD authentication

// // Authentication route
// app.get('/auth/login', passport.authenticate('azuread-openidconnect'));

// // Callback route
// app.post('/auth/callback', passport.authenticate('azuread-openidconnect', { failureRedirect: '/login' }), (req, res) => {
//     res.redirect('/');
// });

// // Protected route
// app.get('/profile', isAuthenticated, (req, res) => {
//     res.render('profile', { user: req.user });
// });

// function isAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/login');
// }



module.exports = router;