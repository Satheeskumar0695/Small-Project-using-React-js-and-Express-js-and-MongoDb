const registerModel = require('../model/register');



async function login(req,res)
{
    const {email,password} = req.body;
    const user =  await registerModel.findOne({email:email});
  
    if (!user)
    {
        res.status(404).json(
            { status:false,
                message : 'Email id not found '

            }
        );
    }
    if(password!==user.password)
    {
        res.status(404).json(
            {
                status:false,
                message : 'password wrong'
            }
        );
    }
    const alluser =  await registerModel.find() 
res.json(
    {   success : true,
        message: 'login ok',
        alluser
    }
)
}
module.exports=login;