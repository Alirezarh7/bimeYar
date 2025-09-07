const prisma = require('../lib/prisma');
const { signToken } = require('../utils/jwt');

async function loginOrRegister(phone, code, profile) {
    if (code !== '1111') {
        const err = new Error('INVALID_CODE');
        err.code = 'INVALID_CODE';
        throw err;
    }

    let user = await prisma.user.findUnique({
        where: { phone },
        include: { wallet: true }
    });

    if (!user) {
        if (!profile) {
            return { needProfile: true };
        }
        user = await prisma.user.create({
            data: {
                phone,
                firstName: profile.firstName ?? null,
                lastName: profile.lastName ?? null,
                nationalId: profile.nationalId ?? null,
                city: profile.city ?? null,
                wallet: { create: {} }
            },
            include: { wallet: true }
        });
    }

    const token = signToken(user, user.wallet);
    return { token, user, wallet: user.wallet };
}

module.exports = { loginOrRegister };
