import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";  
import Nav_bar from './Components/Nav_bar/Nav_bar'
import Login from './Components/Form/Login/Login'
import Home from './Pages/Home/Home'
import Books from './Pages/Books/Books'
import AboutUs from './Pages/AboutUs/AboutUs'
import ContactN from './Pages/ContactN/ContactN'
import Registation from './Components/Form/Registation/Registation'
import Reservation from './Reservation/Reservation'


const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};


const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};



const App = () => {
  return (
    <>
    <Nav_bar/>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/books' element={<Books/>} />
      <Route path='/aboutus' element={<AboutUs/>} />
      <Route path='/contactN' element={<ContactN/>} />
      <Route path='/register' element={<Registation/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path='/reservation' element={<Reservation/>}/>
  
    </Routes>
   
    </>
    
  )
}

export default App