const prisma = require('../lib/prisma');

async function topup(userId, amount) {
    const uid = Number(userId);
    const wallet = await prisma.wallet.update({
        where: { userId: uid },
        data: { balance: { increment: amount } }
    });
    return wallet;
}

module.exports = { topup };
