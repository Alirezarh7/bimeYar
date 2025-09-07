const authService = require('../services/authService');

async function login(req, res) {
    try {
        const { phone, code, profile } = req.body;
        if (!phone || !code) return res.status(400).json({ message: 'phone & code required' });

        const result = await authService.loginOrRegister(phone, code, profile);
        if (result.needProfile) return res.status(200).json({ needProfile: true });
        return res.json(result);
    } catch (e) {
        if (e.code === 'INVALID_CODE') return res.status(401).json({ message: 'invalid code' });
        console.error(e);
        return res.status(500).json({ message: 'server error' });
    }
}

module.exports = { login };
