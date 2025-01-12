import React from 'react'
import './Registation.css'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Registation = () => {
  return (
    <div className='register-body'>
    <div className='register-wrapper'>
      <form action="">
        <h1>Register</h1>
        <div className='input-box'>
            <input type='text' placeholder='Username' reduired/>
            <FaUser className='icon'/>
        </div>

        <div className='input-box'>
            <input type='email' placeholder='Email' reduired/>
            <MdEmail className='icon'/>
        </div>

        <div className='input-box'>
            <input type='passward' placeholder='Passward' reduired/>
            <FaLock className='icon'/>

        </div>

        <div className="remember-forgot">
          <label htmlFor=''><input type='checkbox'/>I agree to the terms & conditions</label>
        </div>

        <Link  to='/'><button type="submit">Register</button></Link>

        <div className="login-link">
          <p>Already have an account?<a href='#'><Link to='/login'> Login</Link></a></p>
        </div>
      </form>

    </div>
    </div>

  )
}

export default Registation