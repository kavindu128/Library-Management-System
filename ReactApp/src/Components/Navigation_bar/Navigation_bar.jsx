import React from 'react'
import './Navigation_bar.css'
import logo from '../../assets/Library_logo.png'


function Navigation_bar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-brand">
        Library Management System
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="/home" className="navbar-link">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/books" className="navbar-link">Books</a>
        </li>
        <li className="navbar-item">
          <a href="/members" className="navbar-link">Members</a>
        </li>
        <li className="navbar-item">
          <a href="/issues" className="navbar-link">Issued Books</a>
        </li>
        <li className="navbar-item">
          <a href="/settings" className="navbar-link">Settings</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation_bar