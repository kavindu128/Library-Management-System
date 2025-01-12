import React from 'react'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import Registation from '../Registation/Registation';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
    <div className='login-body'>
    <div className='login-wrapper'>
      <form action="">
        <h1>Login</h1>
        <div className='input-box'>
            <input type='text' placeholder='Username' reduired/>
            <FaUser className='icon'/>
        </div>

        <div className='input-box'>
            <input type='passward' placeholder='Passward' reduired/>
            <FaLock className='icon'/>

        </div>

        <div className="remember-forgot">
          <label htmlFor=''><input type='checkbox'/>Remember me</label>
          <a href='#'>Forgot Passward</a>
        </div>

        <Link to="/"><button type="submit">Login</button></Link>

        <div className="register-link">
          <p>Don't have an account?<a href=''><Link to='/register'> Register</Link></a></p>
        </div>
      </form>

    </div>
    </div>
    </>
  )
}

export default Login