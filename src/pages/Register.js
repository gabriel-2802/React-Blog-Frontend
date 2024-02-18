import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

function Register() {
  return (
    <div className='login'>
        <span className="loginTitle"> Register </span>
        <form action="" className="loginForm">
            <label> Username </label>
            <input type="text" placeholder=" enter your username..." className='logInput' />
            <label> Email </label>
            <input type="email" placeholder=" enter your email..." className='logInput' />
            <label> Password </label>
            <input type="password" placeholder=" enter your password..." className='logInput'/>
            <button className="loginButton"> Register </button>
        </form>
        <button className="loginRegisterButton"> <Link to='/login' className='buttonLink'> Login </Link> </button>
      
    </div>
  )
}

export default Register
