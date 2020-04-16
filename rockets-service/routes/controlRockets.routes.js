const express = require('express');
const router = express.Router();
const rocketCTR = require ('../controllers/controlRockets.controller');

router.get('/', rocketCTR.getRockets);
router.put('/putRocket', rocketCTR.putRocket);
router.post('/postRocket', rocketCTR.postRocket);


module.exports = router;