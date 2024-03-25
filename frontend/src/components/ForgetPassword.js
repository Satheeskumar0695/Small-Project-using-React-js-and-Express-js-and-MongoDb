import React, { useState } from 'react'
import'./css/Login.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



function ForgetPassword() {
 const navigate = useNavigate();
const [formData,setFromData] = useState(
    {
      email:''
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
        const response = await fetch(process.env.REACT_APP_API_URI + '/forget',
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
        <label htmlFor="email">Enter your Email id:</label>
        <input type="text" id="email" name="email"  value={formData.email} onChange={onHandleChange} />
       <div className="btn-submit">
          <input type="submit" value="Submit"  onClick={onHandleSubmit} />
        </div>
      </div>
    </div>
    </div>
  )
}

export default ForgetPassword