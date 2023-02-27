import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/CKlogo.png';
import './navbar.css';



const Navbar = () => {
  return (
    <div className='Checkaro__navbar'>
      <div className='Checkaro__navbar-links'>
      <div className='Checkaro__navbar-links_logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='Checkaro__navbar-links_container'></div>
      <p><a href='#login'>Log In/Sign Up</a></p>
      <p><a href='#Cart'>Cart</a></p>
      </div>
     </div>
  )
}

export default Navbar