import React from 'react';
import { Link } from 'react-router-dom';
import './css/Page.css'

function Page() {
  return (
    <div className="container"> {/* Use className for applying CSS classes */}
      <h1>Landing Page</h1>
      <Link to={'/register'} className="button">Register</Link> {/* Use className for applying CSS classes */}
      <Link to={'/login'} className="button">Login</Link> {/* Use className for applying CSS classes */}
    </div>
  );
}

export default Page;
