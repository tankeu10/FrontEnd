import React from 'react';
import SovereinCloud from '../assets/SovereinCloud.png';
import{ Link } from 'react-router-dom';

import '../styles/Navbar.css';

function Navbar() {

  
  return (
    <div className='Navbar'>
        <div className='leftSide' >
            <img src={SovereinCloud} alt=''/>
            <div className= 'hiddenLinks'> 
          <Link to="/"> Home</Link>
          <Link to="/Signup"> S'inscrire</Link>
          <Link to="/Signin"> Connexion</Link>
          <Link to="/ContactUs"> Contact</Link>
          
            </div>
        </div>
        <div className= 'rightSide'>
          <Link to="/"> Home</Link>
          <Link to="/Signup"> S'inscrire</Link>
          <Link to="/Signin"> Connexion</Link>
          
          <Link to="/ContactUs"> Contact</Link>

          <button >
            
          </button>
        </div>
    </div>
  )
}

export default Navbar
