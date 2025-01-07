import React, { useEffect, useState } from 'react'
import './Nav_bar.css'
import logo from '../../assets/Library_logo.png'

const Nav_bar = () => {

  const[sticky, setStickey] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setStickey(true) : setStickey(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
      <img src={logo} alt ="" className='logo'/>
      <ul>
        <li>Home</li>
        <li>Books</li>
        <li>About us</li>
        <li>Contact</li>
        <li><button className='loginbtn'>Login</button></li>
      </ul>
     
      
    </nav>
  )
}

export default Nav_bar
