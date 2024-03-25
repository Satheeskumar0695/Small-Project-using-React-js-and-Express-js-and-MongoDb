import React, { useEffect, useState } from 'react';
import './css/Dashboard.css'; // Corrected file name import
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Dashboard() {
   
  const [users, setUsers] = useState([
    
  
  ]);
 
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(2); 
  
  async function fetchData() {
    try {
      const response = await fetch(process.env.REACT_APP_API_URI + '/alluser');
      const data = await response.json();
      console.log(data.user);
      setUsers(data.user);
    } catch (error) {
      console.log('Data fetch error', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function onHandleDelete(userId)
  {
   console.log();
   try {
    const response = await fetch(process.env.REACT_APP_API_URI + '/DeleteUser',
    {
      method :'POST',
      headers:{'content-type':'application/JSON'},
      body:JSON.stringify({id:userId})
    });

    toast.success(' user deleted successfully...')
    fetchData();
  
       
  } 
  catch (error) {
    toast.error('API Error');
    console.log('Data delete error', error);
  }
}

  
function PaginationControls() {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(users.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number} className="page-item">
          <button className="page-link" onClick={() => setCurrentPage(number)}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
}


  return (
    <div className="dashboard-container">
      <h1>User Dashboard</h1>
      <div className="table-container">
       
        <table>
          <thead>
            <tr>
            <th>NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={user._id}>
                <td> <td>{index + 1}</td></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="action-buttons">
                  <button className="edit" ><Link to= {`/editUser/${user._id}`} >Edit</Link></button>
                  <button className="delete" onClick={()=>onHandleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PaginationControls />
    </div>
  );
}

export default Dashboard;
