import React from 'react'
import '../styles/loginRegister.css'

export const Login = () => {
  return (
    <form className='login'>
      <h1 >Login</h1>
      <input placeholder='Username' className='username'></input>
      <input placeholder='Password' className='password'></input>
      <button >Login</button>
    </form>
  )
}
