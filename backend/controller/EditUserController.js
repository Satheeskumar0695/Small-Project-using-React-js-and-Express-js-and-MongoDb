const registerModel = require('../model/register');

async function EditUser(req,res)
{
  const { _id,name,email,phone } = req.body;
  
  console.log(_id,name,email,phone);
 try {
   const user = await registerModel.findOne({ _id: _id});
   
   if (!user) {
     return res.status(404).json({
       success: false,
       message: 'User not found',
     });
   }
    user.name = name;
    user.email= email;
    user .phone = phone;
    await user.save()
   console.log(user);

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
}

module.exports = EditUser;
