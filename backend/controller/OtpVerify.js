const registerModel = require('../model/register');


async function OtpVerfication(req,res)
{
    const {OTP} = req.body;
    const user =  await registerModel.findOne({OTP:OTP});

    try{
        if(!user)
        {
            return res.status(404).json(
                {
                    success : false,
                    message : 'INVALID OTP'
    
                }
            )
        }
      return res.json(
        {
            success : true,
            message : 'otp verfied...' ,
            OTP 
          }
      )
    
    }
  catch(error)
  {
    console.log('ERROR :',error);
  }

}
module.exports = OtpVerfication;