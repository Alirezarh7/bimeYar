const express = require('express');
const cors = require('cors');
const { port, origin } = require('./config');

const authRoutes = require('./routes/auth');
const walletRoutes = require('./routes/wallet');
const setupSwagger = require('./swagger/swagger');

const app = express();
const allowedOrigins = [
    'http://localhost:5173',
    'http://130.185.75.59',
    'https://bime-yar.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(express.json());

setupSwagger(app);

app.use('/auth', authRoutes);
app.use('/wallet', walletRoutes);

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'internal server error' });
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
    console.log(`Swagger docs: http://localhost:${port}/api-docs`);
});
