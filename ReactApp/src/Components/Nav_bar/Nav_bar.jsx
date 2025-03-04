import React, { useEffect, useState } from 'react'
import './Nav_bar.css'
import logo from '../../assets/Library_logo.png'
import { Link } from 'react-router-dom'

const Nav_bar = () => {
  const [sticky, setSticky] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const updateUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser?.loggedIn ? storedUser : null);
    };

    // Initial check
    updateUser();
    
    // Listen for storage changes
    window.addEventListener('storage', updateUser);

    const handleScroll = () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('storage', updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event('storage')); // Trigger storage event
    window.location.href = "/";
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/books">Books</Link></li>
        <li><Link to="/aboutus">About us</Link></li>
        <li><Link to="/contactN">Contact</Link></li>
        <li>
          {user ? (
            <div className="user-menu">
              <span>Welcome {user.username}!</span>
              <button className='logoutbtn' onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            <Link to="/"><button className='loginbtn'>Login</button></Link>
          )}
        </li>
      </ul>
    </nav>
  )
}

export default Nav_bar