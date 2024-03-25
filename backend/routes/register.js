const express = require('express');
const user = require('../controller/registerController');
const login = require('../controller/loginController');
const forget = require('../controller/ForgetPasswordcontroller');
const OtpVerfication = require('../controller/OtpVerify');
const NewPassword = require('../controller/NewPassword');
const AllUser = require('../controller/GetusersController');
const Phone = require('../controller/Phone');


const router = express.Router();

router.route('/register').post(user);
router.route('/login').post(login);
router.route('/forget').post(forget);
router.route('/otp').post(OtpVerfication);
router.route('/newpassword').post(NewPassword);
router.route('/phone').post(Phone);
router.route('/alluser').get(AllUser);

module.exports = router;