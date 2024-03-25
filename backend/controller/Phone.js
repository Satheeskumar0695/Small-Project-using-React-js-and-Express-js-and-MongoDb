const registerModel = require('../model/register');
const twilio = require('twilio');


async function  Phone(req,res)
{
    const accountSid = 'your account id'; // Geting id from twilio website
    const authToken = 'your token';
    const client = twilio(accountSid, authToken);

       const {phone} =req.body;

       const OTP = Math.floor(Math.random()*1000000 + 1);
       const user = await  registerModel.findOne({phone:phone});

       if(!user)
       {
         return res.status(400).json(
              {
                 success : false,
                 message : 'phone not found'    
              }
         )
       }
       
       if(!user.OTP)
       {
              user.OTP = OTP;
              await user.save();
            
              }
     
      console.log("otp saved... ");

      async function message()
      {
        await client.messages.create(
            {
                           body: `your otp is ${OTP}`,
                           from: '', //you get number from twilio website.
                           to: '+9112345678',  // change Your receiver number 
            }
           );
      }
    message();



  return res.json(
    {
         status : true,
         message : 'OTP send' , 
         OTP
    });   

}
module.exports = Phone;

