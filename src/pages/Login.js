import React from 'react'
import '../styles/login.css'
import { Link } from 'react-router-dom'
import Register from './Register'

function Login() {
  return (
    <div className='login'>
        <span className="loginTitle"> Login </span>
        <form action="" className="loginForm">
            <label> Email </label>
            <input type="email" placeholder=" enter your email..."  className='logInput'/>
            <label> Password </label>
            <input type="password" placeholder=" enter your password..." className='logInput' />
            <button className="loginButton"> Login </button>
        </form>
        <button className="loginRegisterButton"> <Link to='/register' className='buttonLink'> Register </Link> </button>
      
    </div>
  )
}

export default Login
