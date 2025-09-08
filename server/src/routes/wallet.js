const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { topup, me } = require('../controllers/walletController');

/**
 * @swagger
 * /wallet/me:
 *   get:
 *     summary: Get current user info
 *     tags:
 *       - Wallet
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User info from JWT
 */
router.get('/me', auth, me);

/**
 * @swagger
 * /wallet/topup:
 *   post:
 *     summary: Topup wallet
 *     tags:
 *       - Wallet
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 100
 *     responses:
 *       200:
 *         description: Wallet topped up and returns new token
 *       400:
 *         description: Invalid amount
 */
router.post('/topup', auth, topup);

module.exports = router;
