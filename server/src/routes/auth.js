const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login or register user
 *     description: If user exists, returns JWT token. If not, returns needProfile=true
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "+491701234567"
 *               code:
 *                 type: string
 *                 example: "1111"
 *               profile:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                     example: "Ali"
 *                   lastName:
 *                     type: string
 *                     example: "Rahimi"
 *                   nationalId:
 *                     type: string
 *                     example: "1234567890"
 *                   city:
 *                     type: string
 *                     example: "Berlin"
 *     responses:
 *       200:
 *         description: User logged in or need profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 needProfile:
 *                   type: boolean
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *                 wallet:
 *                   type: object
 *       401:
 *         description: Invalid code
 *       400:
 *         description: Missing phone or code
 */
router.post('/login', login);

module.exports = router;
