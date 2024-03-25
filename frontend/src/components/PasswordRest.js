import React, { useState } from 'react'
import'./css/Login.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';




  function PasswordRest() {
    const navigate = useNavigate();

const location =useLocation();
const searchParams = new URLSearchParams(location.search);
const verifyOTP = searchParams.get('OTP');
const [errorMessage,setErrorMessage] = useState('');

const [formData,setFromData] = useState(
    {
       password :'',
       cpassword :'',
       OTP:verifyOTP
    }
)

function onHandleChange(e)
{
    setFromData(
        {
          ...formData,[e.target.name] : e.target.value 
        }
    )
}

async function onHandleSubmit()
{

        if(formData.password!==formData.cpassword)
        {
          setErrorMessage('Password does not match');
          setTimeout(( ) => {
            setErrorMessage ('');
          }, 3000);
          return;
        }
    try
    {
        const response  =  await fetch(process.env.REACT_APP_API_URI +'/newpassword',
         {
          method:'post',
          headers :{'content-Type':'application/JSON'},
          body: JSON.stringify(formData)
         }
        );
          const data = await response.json();
          if(response.ok)
          {
             navigate('/login');
          }

       }

    catch(error)
    {
            toast.error('API ERROR');
    }
}

  return (
     <div>
        <div className="container">
      <h1> PASSWORD RESET  </h1>
      <div className="form-container">
        <input type='hidden' value={formData.OTP} onChange={onHandleChange} />
        <label htmlFor="password">Enter your New Password :</label>
        <input type="text" id="password" name="password" value={formData.password} onChange={onHandleChange}/>
        <label htmlFor="password">Enter your Confirm Password :</label>
        <input type="text" id="cpassword" name="cpassword" value={formData.cpassword} onChange={onHandleChange}/>
       <div className="btn-submit">
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
          <input type="submit" value="Submit"  onClick={onHandleSubmit}/>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default PasswordRest