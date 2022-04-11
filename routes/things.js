const express = require('express');
const router = express.Router();
const thingsCtrl = require('../controllers/things');
const isLoggedIn = require('../config/auth')


router.get('/', thingsCtrl.index);

router.get('/login', isLoggedIn, thingsCtrl.new);

// router.get('/:id', thingsCtrl.show);

router.post('/things/new', thingsCtrl.create);



module.exports = router;
