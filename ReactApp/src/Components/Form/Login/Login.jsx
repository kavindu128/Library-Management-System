import React, { useState } from 'react'; 
import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem("user", JSON.stringify({
          username: data.username,
          loggedIn: true
        }));
        window.dispatchEvent(new Event('storage')); // Trigger NavBar update
        navigate("/home");
      } else {
        setError(data.error || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Failed to connect to server");
    }
  };

  return (
    <div className='login-body'>
      <div className='login-wrapper'>
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          {error && <div className="error-message">{error}</div>}
          
          <div className='input-box'>
            <input 
              type='email' 
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className='icon'/>
          </div>

          <div className='input-box'>
            <input 
              type='password' 
              placeholder='Password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className='icon'/>
          </div>

          <div className="remember-forgot">
            <label><input type='checkbox'/>Remember me</label>
            <a href='#'>Forgot Password</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login