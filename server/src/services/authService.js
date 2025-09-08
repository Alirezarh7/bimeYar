const prisma = require('../lib/prisma');

exports.findUserByPhone = (phone) => {
    return prisma.user.findUnique({ where: { phone }, include: { wallet: true } });
};

exports.createUser = async (data) => {
    // کاربر + کیف پول بساز
    return prisma.user.create({
        data: {
            phone: data.phone,
            firstName: data.firstName,
            lastName: data.lastName,
            nationalId: data.nationalId,
            city: data.city,
            createdAt: new Date(),
            wallet: { create: {} }
        },
        include: { wallet: true }
    });
};
