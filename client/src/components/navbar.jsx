import React from 'react'
import '../styles/navbar.css'
import '../index.css'
import logo from '../assets/logo.png'
export const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={logo}></img>
      </div>
      <div className='navbar'>
        <ul>
          <li><a href=''>Login</a></li>
          <li><a href=''>Register</a></li>
        </ul>
      </div>
    </nav>
  )
}
