const express = require('express');
const { sendOtp, registerUser,verifyOtp , loginUser } = require('../controllers/authController');
const router = express.Router();

router.post('/send-otp', sendOtp); 
router.post('/register', registerUser); 
router.post('/verify-otp', verifyOtp);
router.post('/login', loginUser);
module.exports = router;
