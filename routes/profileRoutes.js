const express = require('express');
const { getCurrentProfile  , updateUserProfile} = require('../controllers/profileController');
const authenticate = require('../middleware/authenticate'); 
const router = express.Router();

router.get('/me', authenticate, getCurrentProfile);
router.put('/update', updateUserProfile);
module.exports = router;
