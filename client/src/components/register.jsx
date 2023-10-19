import React, { useState } from 'react'
import '../styles/loginRegister.css'

export const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const register = async (e)=>{
    e.preventDefault()
    await fetch('http://localhost:4000/register', {
      method:'POST',
      body: JSON.stringify({username, password}),
      headers:{'Content-type':'application/json'}
    })
  }
  return (
    <form className='register' onSubmit={register} method='POST'>
      <h1>Register</h1>
      <input placeholder=' Username'
       className='username'
       onChange={(e)=>{setUsername(e.target.value)}} 
       ></input>
      <input placeholder=' Password' className='password'  onChange={(e)=>{setPassword(e.target.value)}} ></input>
      <button onClick={console.log(username)} >Register</button>
    </form>
  )
}
