const express = require('express');
const cors = require('cors');
const { port, origin } = require('./config');

const authRoutes = require('./routes/auth');
const walletRoutes = require('./routes/wallet');
const setupSwagger = require('./swagger/swagger');

const app = express();
app.use(cors({ origin }));
app.use(express.json());

setupSwagger(app);  // <----- این خط اضافه شد

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
