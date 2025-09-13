require('dotenv').config();

const rawOrigins = process.env.ORIGIN || 'http://localhost:5173';
const origins = rawOrigins.split(',').map(s => s.trim()).filter(Boolean);

module.exports = {
    port: Number(process.env.PORT || 4000),
    origins,               // آرایه از originها
    jwtSecret: process.env.JWT_SECRET || 'dev-secret'
};
