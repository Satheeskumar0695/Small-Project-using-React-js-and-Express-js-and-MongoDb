import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page from './components/Page';
import Register from './components/register';
import Login from './components/lo';
import Dashboard from './components/Dashboard';
import ForgetPassword from './components/ForgetPassword';
import Otp from './components/Otp';
import PasswordRest from './components/PasswordRest';
import PhonePassword from './components/PhonePassword';
import EditUser from './components/EditUser';

// import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='dark' position='top-center' />
      <Router>
        <Routes>
          <Route path='/' element={<Page />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path ='/dashboard' element ={<Dashboard />} />
          <Route path = '/phone' element = {<PhonePassword />}/>
          <Route path = '/forgetpassword' element ={<ForgetPassword />}/>
          <Route path = '/otp' element = {<Otp />} />
          <Route path='/PasswordRest' element ={<PasswordRest />} />
          <Route path='/editUser/:id' element ={<EditUser />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
