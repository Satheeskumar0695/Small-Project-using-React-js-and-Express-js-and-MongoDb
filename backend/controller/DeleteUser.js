// /DeleteUser


const registerModel =require('../model/register')

async function  DeleteUser(req,res)
{
         const {id} = req.body 
         console.log(id);
         const user = await registerModel.deleteOne({_id:id});
       console.log(user);
         return res.json(
            {
                  success : true,
                  message:'user delete'
            }
         )


}
module.exports= DeleteUser;