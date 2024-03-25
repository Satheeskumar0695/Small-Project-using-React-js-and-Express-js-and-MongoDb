import React, { useState } from 'react'
import'./css/Login.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function PhonePassword() {
 const navigate = useNavigate();
const [formData,setFromData] = useState(
    {
       phone:''
    }
);

function onHandleChange(e)
{
    setFromData(
        {
            ...formData,[e.target.name] :e.target.value
        }
    )
}
async function onHandleSubmit()
{
       try{
        console.log(formData);
        const response = await fetch(process.env.REACT_APP_API_URI + '/phone',
        {
            method: 'post',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify(formData),
            successStatus : 200
       });
       const data = await response.json();
       if(response.ok)
       {    console.log(data.OTP);
           toast.success(`${data.message}`);
           navigate('/otp');
       }
       else{
        
        toast.error(`${data.message}`);
       }

       }
       catch(error)
       {
              toast.error('API FAILLED....!');
       }
}

  return (
    <div>
        <div className="container">
      <h1>FORGET PASSWORD</h1>
      <div className="form-container">
        <label htmlFor="email">Enter your phone  Number:</label>
        <input type="text" id="email" name="phone"  value={formData.phone} onChange={onHandleChange} />
       <div className="btn-submit">
          <input type="submit" value="Submit"  onClick={onHandleSubmit} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default PhonePassword