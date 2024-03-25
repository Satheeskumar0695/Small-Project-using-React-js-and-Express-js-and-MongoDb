import React, { useState } from 'react'
import'./css/Login.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function Otp() {
  const navtigate = useNavigate();
  const [formData,setFromData] = useState(
    {
      OTP :''
    }
  )
const [errorMessage,setErrorMessage] = useState('');
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
        try{
                const response = await fetch(process.env.REACT_APP_API_URI  +'/otp',
                {
                   method: 'post',
                   headers : {'Content-Type':'application/JSON'},
                   body : JSON.stringify(formData)


                } )
                  const data = await response.json();
                if (response.ok)
                {
                navtigate(`/PasswordRest?OTP=${formData.OTP}`);
                }
                else{
                  console.log( `${data.message}`);
                  setErrorMessage(data.message);
                }
        }
       
        catch(error)
        {
         console.log('api error');
         toast.error('api error');
           
        }
  }


  return (
    <div>
        <div className="container">
      <h1>OTP PAGE</h1>
      <div className="form-container">
        <label htmlFor="email">Enter your OTP :</label>
        <input type="text" id="email" name="OTP"  value={formData.OTP}  onChange={onHandleChange}  />
        {errorMessage && <p className="error-message">{errorMessage}</p>} 
       <div className="btn-submit">
          <input type="submit" value="Submit"  onClick={onHandleSubmit}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Otp