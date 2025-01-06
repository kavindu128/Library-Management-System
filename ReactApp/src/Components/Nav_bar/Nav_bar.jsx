import React from 'react'
import './Nav_bar.css'
import logo from '../../assets/Library_logo.png'

const Nav_bar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt ="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Books</li>
        <li>About us</li>
        <li>Contact</li>
        <li><button className='btn'>Login</button></li>
      </ul>
     
      
    </nav>
  )
}

export default Nav_bar
