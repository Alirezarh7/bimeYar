const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

function signToken(user, wallet) {
    const claims = {
        sub: String(user.id),
        phone: user.phone,
        firstName: user.firstName,
        lastName: user.lastName,
        nationalId: user.nationalId,
        city: user.city,
        wallet: {
            balance: wallet?.balance ?? 0,
            currency: wallet?.currency ?? 'EUR'
        }
    };
    return jwt.sign(claims, jwtSecret, { expiresIn: '7d' });
}

function verifyToken(token) {
    return jwt.verify(token, jwtSecret);
}

module.exports = { signToken, verifyToken };
