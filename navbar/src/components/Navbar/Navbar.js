import React from 'react';
import "./Navbar.css"
import logo from './logo.png'
import cart from './cart-logo.svg'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='nav-bar'>
         <div className='right'>
             <img src={logo} className='logo'></img>
         </div>
         <div className='left'>
             <Link  className='link' to='/'>Home</Link>
             <Link  className='link' to='/about'>Aout Us</Link>
             <Link  className='link' to='/contact'>Contact Us</Link>
             <span className='cart'><img src={cart}></img></span>
         </div>
    </div>
  )
}

export default Navbar
