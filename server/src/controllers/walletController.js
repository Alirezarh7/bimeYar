const walletService = require('../services/walletService');
const prisma = require('../lib/prisma');
const { signToken } = require('../utils/jwt');

async function topup(req, res) {
    try {
        const amount = Number(req.body.amount);
        if (!amount || amount <= 0) return res.status(400).json({ message: 'amount > 0 required' });

        const userId = parseInt(req.user.sub, 10);
        const wallet = await walletService.topup(userId, amount);

        const user = await prisma.user.findUnique({ where: { id: userId } });
        const token = signToken(user, wallet);

        return res.json({ wallet, token });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'server error' });
    }
}

function me(req, res) {
    return res.json({ user: req.user });
}

module.exports = { topup, me };
