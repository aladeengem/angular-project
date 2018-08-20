var express = require('express');
var router = express.Router();
var register_controller = require('../controllers/register.controller');


/* GET users listing. */
router.post('/register', register_controller);

module.exports = router;
