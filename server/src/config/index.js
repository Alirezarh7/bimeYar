require('dotenv').config();
module.exports = {
    port: process.env.PORT || 4000,
    origin: process.env.ORIGIN || 'http://localhost:5173',
    jwtSecret: process.env.JWT_SECRET || 'dev-secret'
};
