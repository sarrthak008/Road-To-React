import React from 'react';
import "./Navbar.css"
import logo from './logo.png'
import cart from './cart-logo.svg'


const Navbar = () => {
  return (
    <div className='nav-bar'>
         <div className='right'>
             <img src={logo} className='logo'></img>
         </div>
         <div className='left'>
             <a  className='link' href='/'>Home</a>
             <a  className='link' href='/about'>Aout Us</a>
             <a  className='link' href='/contact'>Contact Us</a>
             <span className='cart'><img src={cart}></img></span>
         </div>
    </div>
  )
}

export default Navbar
