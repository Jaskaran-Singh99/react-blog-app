import React, { useEffect, useState } from 'react'
import '../styles/navbar.css'
import '../index.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  const [username, setUsername] = useState(null)
  useEffect(()=>{
    fetch('http://localhost:4000/profile',{
      credentials:'include'
    }).then((res)=>{
      res.json().then(info=>{
        setUsername(info)
      })
     
    })
  }, [])
  
  return (
    <nav>
      <div className='logo'>
        <img src={logo}></img>
      </div>
      <div className='navbar'>
        <ul>
          {username && 
          <>
            <li><Link to='/create'>Create a Post</Link></li>
            <a>Logout</a>
          </>
          }
          {!username &&
           <>
           <li><Link to='/login'>Login</Link></li>
           <li><Link to='/register'>Register</Link></li>
           </>
          }
          
        </ul>
      </div>
    </nav>
  )
}
