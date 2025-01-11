import React from 'react'
import './Hero.css'
import next_arrow from '../../assets/right-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
        <h1>Welcome to the Library Management System</h1>
        <p className='para1'>Our system helps you manage and track your library activities efficiently.</p>
        <p>With our system, you can easily manage book inventories, track borrowed books, and much more.</p>
        <button className='btn'>Explore more<img src ={next_arrow} alt=''class/></button>

        </div>

    </div>
  )
}

export default Hero