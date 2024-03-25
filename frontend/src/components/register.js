import React, { Fragment, useState } from 'react'
import './css/register.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';
export default function Register() {
const navigate = useNavigate();
    const [formdata , Setformdata]= useState({
      name : '',
      email : '',
      password : '',
      phone :''
    });
     function  onHandleChange (e) 
     {
          Setformdata(
            {  ...formdata,[e.target.name] : e.target.value

            }
          );
     };

     async function onHandleSubmit(e) {
      e.preventDefault();
      console.log('form submitted.', formdata);
      try {
        const data = await fetch( process.env.REACT_APP_API_URI + '/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify(formdata),
          successStatus: 200, 
        
        })
        
        toast.success('Registered successfully!');
        Setformdata({
          name: '',
          email: '',
          password: '',
          phone: '',

        });
        navigate('/login');
      } catch (error) {
        console.log('API ERROR', error);
        toast.error('Failed to register. Please try again.');
      }
    }
    
  return (
    <div> 

        <Fragment>
           <h1> REGISTER FORM </h1>
           <div className=' container'>
             <div className='sub'>
                <label>Enter your name : </label>
                <input type='text' id='' name='name' value={formdata.name} onChange={onHandleChange}  ></input>
             </div>
             <div className='sub'>
                <label>Enter your email : </label>
                <input type='text' id='' name="email" value={formdata.email} onChange={onHandleChange}  ></input>
             </div>
             <div className='sub'>
                <label>Enter your password : </label>
                <input type='text' id='' name='password' value={formdata.password} onChange={onHandleChange}  ></input>
             </div>
             <div className='sub'>
                <label>Enter your phone number  : </label>
                <input type='text' id='' name='phone' value={formdata.phone} onChange={onHandleChange}  ></input>
             </div>
             <Link  to= '/login' className='link'>Have an accout click here</Link>
             <div className='btn-submit'>
                <input type='submit' value='submit' onClick={onHandleSubmit}></input>
             </div>
           
           </div>
           

           

        </Fragment>




    </div>
  )
}
