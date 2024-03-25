const  registerModel = require('../model/register');

async function AllUser(req,res)
{
 const alluser = await registerModel.find();
  
 return res.json(
    {  success : true,
       user:  alluser

    }
 );

}
module.exports = AllUser;