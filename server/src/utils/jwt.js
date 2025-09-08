const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config');

exports.signToken = (user) => {
    return jwt.sign(
        {
            id: user.id,
            phone: user.phone,
            firstName: user.firstName,
            lastName: user.lastName,
            nationalId: user.nationalId,
            city: user.city,
            wallet: user.wallet
        },
        jwtSecret,
        { expiresIn: '1h' }
    );
};
