const express = require('express');
const EditUser = require('../controller/EditUserController');
const getSingleUser = require('../controller/GetSingleUser');
const DeleteUser = require('../controller/DeleteUser');
const router = express.Router();

router.route('/EditUser').post(EditUser);
router.route('/getUser/').post(getSingleUser);
router.route('/DeleteUser').post(DeleteUser);
module.exports = router;
