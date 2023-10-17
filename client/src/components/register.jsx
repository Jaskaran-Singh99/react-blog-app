import React from 'react'
import '../styles/loginRegister.css'

export const Register = () => {
  return (
    <form className='register'>
      <h1>Register</h1>
      <input placeholder='Username' className='username'></input>
      <input placeholder='Password' className='password'></input>
      <button className='register'>Register</button>
    </form>
  )
}
