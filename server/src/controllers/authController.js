const authService = require('../services/authService');
const { signToken } = require('../utils/jwt');

exports.getToken = async (req, res, next) => {
    try {
        const { phone, code } = req.body;

        if (!phone) return res.status(400).json({ message: 'phone required' });
        if (code !== '1111') return res.status(401).json({ message: 'Invalid code' });

        const user = await authService.findUserByPhone(phone);

        if (!user) {
            // کاربر پیدا نشد ➜ فرانت باید بره فرم پروفایل نشون بده
            return res.status(204).json({ needProfile: true });
        }

        // کاربر پیدا شد ➜ توکن بده
        const token = signToken(user);
        return res.status(200).json({ token, user });

    } catch (err) {
        next(err);
    }
};

exports.register = async (req, res, next) => {
    try {
        const { phone, profile } = req.body;
        if (!phone || !profile) {
            return res.status(400).json({ message: 'phone and profile required' });
        }

        // دوباره چک کن کاربر وجود نداشته باشه
        const existingUser = await authService.findUserByPhone(phone);
        if (existingUser) {
            return res.status(400).json({ message: 'user already exists' });
        }

        // کاربر رو بساز
        const newUser = await authService.createUser({ phone, ...profile });

        // توکن برگردون
        const token = signToken(newUser);
        return res.status(201).json({ token, user: newUser });

    } catch (err) {
        next(err);
    }
};
