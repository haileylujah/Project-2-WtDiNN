const express = require('express');
const router = express.Router();
const thingsCtrl = require('../controllers/things');
const isLoggedIn = require('../config/auth')
const isAdmin = require


router.get('/', thingsCtrl.index);

router.get('/new', isLoggedIn, thingsCtrl.new);

router.get('/:id', thingsCtrl.show);

router.post('/', thingsCtrl.create);



module.exports = router;