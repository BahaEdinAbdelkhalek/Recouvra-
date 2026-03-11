const express = require('express');
const router = express.Router();
const { register, login, logout, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { registerValidator, loginValidator } = require('../validators/authValidator');

router.post('/register', registerValidator, register);
router.post('/login', loginValidator, login);
router.post('/logout', protect, logout);
router.get('/me', protect, getMe);

module.exports = router;
