const { verifyToken } = require('../utils/jwt');

module.exports = function authMiddleware(req, res, next) {
    const auth = req.headers.authorization || '';
    const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;
    if (!token) return res.status(401).json({ message: 'no token' });
    try {
        req.user = verifyToken(token);
        next();
    } catch (err) {
        return res.status(401).json({ message: 'invalid token' });
    }
};
