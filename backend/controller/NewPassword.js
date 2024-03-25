const registerModel = require('../model/register');


 async function NewPassword(req,res)
{
     const{OTP,password} = req.body;
     const user = await registerModel.findOne({OTP:OTP})
     user.password = password;
     user.OTP = '';
     await user.save();
     return res.json(
        {
            success : true,
            message  : 'password changed...'
        }
     )


}
module.exports = NewPassword;