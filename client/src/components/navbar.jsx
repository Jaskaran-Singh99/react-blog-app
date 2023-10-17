import React from 'react'
import '../styles/navbar.css'
import '../index.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={logo}></img>
      </div>
      <div className='navbar'>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          <li><Link to='/register'>Register</Link></li>
        </ul>
      </div>
    </nav>
  )
}
