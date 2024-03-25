import React, { useEffect } from 'react';
import { useState } from 'react';
import './css/EditUser.css'; 
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

function EditUser() {
 const  navigate = useNavigate();
  const {id}= useParams();
const [formData, setFormData] = useState({ name: '', email: '', phone: '',  id: id });



 

async function fetchData() {
  try {
    console.log(formData)
    const response = await fetch(process.env.REACT_APP_API_URI + '/getuser',
    {
      method: 'POST',
      headers:{'content-type':'application/JSON'},
      body:JSON.stringify(formData)
      
    
    }
     );
    const data = await response.json();
    console.log(data.user);
    setFormData(data.user);
  } catch (error) {
    console.log('Data fetch error', error);
    toast.error('api error');
  }
}

useEffect(() => {
  fetchData();
}, [id]);
function onHandleChange(e) {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
}


async function onHandleSubmit()
{

  try {
    const response = await fetch(process.env.REACT_APP_API_URI + '/EditUser',
    {
      method: 'POST',
      headers:{'content-type':'application/JSON'},
      body:JSON.stringify(formData)
    
    }
     );
    const data = await response.json();
    toast.success('user data updated...!');
    navigate('/dashboard');
   
  } catch (error) {
    console.log('Data fetch error', error);
    toast.error('api error');
  }
}


  return (
    <div className="container">
      <h1 className="title">USER EDIT PAGE</h1>
      
      <div className="form-group">
        <label className="label">Enter your name</label>
        <input type='text' name='name' className="input"  value={formData.name} onChange={onHandleChange}/>
      </div>
      
      <div className="form-group">
        <label className="label">Enter your email</label>
        <input type='text' name='email' className="input"value={formData.email} onChange={onHandleChange} />
      </div>
      <div className="form-group">
        <label className="label">Enter your phone</label>
        <input type='text' name='phone' className="input" value={formData.phone}  onChange={onHandleChange}/>
      </div>
      <div className="form-group">
        <input type='submit' value='Update' className="submit-btn" onClick={onHandleSubmit} />
      </div>
    </div>
  );
}

export default EditUser;
