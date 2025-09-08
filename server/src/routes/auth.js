const express = require('express');
const router = express.Router();
const { getToken, register } = require('../controllers/authController');

/**
 * @swagger
 * /auth/token:
 *   post:
 *     summary: Login user by phone
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
 *     responses:
 *       200:
 *         description: User found -> returns token
 *       204:
 *         description: User not found -> needProfile=true
 */
router.post('/token', getToken);

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Create new user after phone verification
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
 *               profile:
 *                 type: object
 *                 properties:
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   nationalId:
 *                     type: string
 *                   city:
 *                     type: string
 *     responses:
 *       201:
 *         description: User created and token returned
 *       400:
 *         description: Missing data or user already exists
 */
router.post('/register', register);

module.exports = router;
