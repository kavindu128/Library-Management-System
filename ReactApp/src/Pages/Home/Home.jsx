import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Title from '../../Components/Title/Title'
import Features from '../../Components/Features/Features'
import About from '../../Components/About/About'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
    <Hero/>
    <div className='container'>
      <Title subTitle='Specific features' Title='What We Offer'/> 
      <Features/>
      <About/>
      <Title subTitle='Contact Us' Title='Get in Touch'/>
      <Contact/>
    </div>
    <Footer/>
    </div>
  )
}

export default Home