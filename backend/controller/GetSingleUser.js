// Import the required modules
const express = require('express');
const registerModel = require('../model/register');
const router = express.Router();


 async function getSingleUser (req, res)  {
  const { id } = req.body
   console.log(id);
  try {
    const user = await registerModel.findOne({ _id: id });
    console.log(user)
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    return res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

module .exports = getSingleUser;