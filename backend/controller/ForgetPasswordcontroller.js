const registerModel = require('../model/register');
const nodemailer =require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')


async function  forget(req,res)
{
       const {email} =req.body;
       const OTP = Math.floor(Math.random()*1000000 + 1);
       const user = await  registerModel.findOne({email:{$regex : new RegExp(email,'i')}});

       if(!user)
       {
         return res.status(400).json(
              {
                 success : false,
                 message : 'Email id not found'    
              }
         )
       }
       
       if(!user.OTP)
       {
              user.OTP = OTP;
              await user.save();
            
              }
     
      console.log("otp saved... ");

      const transporter = nodemailer.createTransport(
       smtpTransport(
              {
                  service: 'gmail.com',
                  secure : false,
                  auth : {
                     user:   process.env.USER,
                     pass :  process.env.PASSWORD
                  }   
              }
       ))
    
      const mailOptions = {

           from : 'satheeskumar19031996@gmail.com',
           to : email,
           subject : ' Your Forgetpassword ',
           text : `Your OTP is ${OTP} `
      }

      try
      {

        const info = await transporter.sendMail(mailOptions);
        console.log('email send',info.response);
        return res.json(
              {
                   status : true,
                   message : 'email send' , 
                   OTP
              }
        )


      }
 
     catch(error)
    {
       console.log('email not send ',error);
       return  res.status(404).json(
              {
                 status : false ,
                 message : 'email error'

              }
       )
       
  }

}
module.exports =forget;

