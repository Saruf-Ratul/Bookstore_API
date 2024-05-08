const request = require('supertest');
const app = require('../app'); // Assuming your Express app is exported from app.js
const mongoose = require('mongoose');
const User = require('../models/user'); // Assuming you have a User model

// Before running tests, connect to the test database and create a user for testing
beforeAll(async() => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    // Create a user for testing
    await User.create({ username: 'testuser', password: 'password' });
});

// After running tests, disconnect from the database
afterAll(async() => {
    await mongoose.connection.close();
});

describe('Authentication API', () => {
    // Test user login
    it('should login with correct credentials', async() => {
        const res = await request(app)
            .post('/api/login')
            .send({ username: 'testuser', password: 'password' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });

    // Test user login with incorrect credentials
    it('should not login with incorrect credentials', async() => {
        const res = await request(app)
            .post('/api/login')
            .send({ username: 'testuser', password: 'wrongpassword' });
        expect(res.statusCode).toEqual(401);
    });

});