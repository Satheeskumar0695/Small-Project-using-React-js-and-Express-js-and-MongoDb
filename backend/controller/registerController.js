const registerModel = require('../model/register');

async function user(req, res) {
    const data = req.body;

    try {
        const user =new registerModel(data);
      const useri = await user.save();

        res.json({
            success: true,
            message: "User registered successfully...",
            data: useri
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Error registering user"
        });
    }
}

module.exports = user;


