import React, { useState } from 'react';
import './css/Login.css'; 
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const onHandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  async function onHandleSubmit(e) {
    
    try {
      console.log(formData);
      const response = await fetch(process.env.REACT_APP_API_URI + '/login',{
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (response.ok) {
        toast.success('Login successful...');
        navigate('/dashboard');
      } else {
        const responseData = await response.json();
        toast.error(`${responseData.message}`);
        console.log('Login error:', responseData);
      }
    } catch (error) {
      console.log('API ERROR', error);
      toast.error('An error occurred. Please try again later.');
    }
  }

  return (
    <div className="container">
      <h1>Login Page</h1>
      <div className="form-container">
        <label htmlFor="email">Enter your Email id:</label>
        <input type="text" id="email" name="email" value={formData.email} onChange={onHandleChange} required />
        <label htmlFor="password">Enter your password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={onHandleChange}required />
        <Link to = '/forgetpassword' className='pass'> Email via Forget Password?</Link><br></br><br></br>
        <Link to = '/phone' className='pass'>  Mobile via forget password ?</Link><br></br><br></br>
        <div className="btn-submit">
          <input type="submit" value="Submit" className ='btnn'onClick={onHandleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Login;
