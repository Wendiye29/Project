import React from 'react';
import styles from './App.module.css';
import { Link } from 'react-router-dom';

const Headers = () => {
  return (
    <nav className="navbar">
      <h1 className='h'>የኮምፒዩተር ቁጥር ማረጋገጫ</h1>
      <div className='d-flex gap-3' >
      <Link to ="/Home" className="btn btn-primary">Home</Link>
      <Link to ="/Login" className="btn btn-primary">Login</Link>
      
      <Link to ="/Functions" className="btn btn-primary">All in one</Link>
      </div>
      <div class="hamburger">
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
  </div>
    </nav>
  );
};

export default Headers;