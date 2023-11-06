import React from 'react'
import '../styles/loginRegister.css'
import { useState } from 'react'
import { Navigate } from 'react-router'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const login = async (e)=>{
    e.preventDefault()
    const res = await fetch('http://localhost:4000/login',{
      method:'POST',
      body:JSON.stringify({username, password}),
      headers:{'Content-type':'application/json'}
    })

    if(res.ok){
      setRedirect(true)
    }
  }
  if(redirect){
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <form className='login' onSubmit={login}>
      <h1>Login</h1>
      <input placeholder='Username' className='username' onChange={(e)=>setUsername(e.target.value)}></input>
      <input placeholder='Password' className='password' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
      <button >Login</button>
    </form>
  )
}
