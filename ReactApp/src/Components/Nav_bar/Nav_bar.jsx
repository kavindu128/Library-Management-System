import React, { useEffect, useState } from 'react'
import './Nav_bar.css'
import logo from '../../assets/Library_logo.png'
import { Link } from 'react-router-dom'
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to = "/aboutus">About us</Link></li>
        <li><Link to="/contactN">Contact</Link></li>
        <li>
          <Link to = "/login"><button className='loginbtn'>Login</button></Link>
        </li>
      </ul>
     
      
    </nav>
  )
}

export default Nav_bar
