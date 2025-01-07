import React from 'react'
import Nav_bar from './Components/Nav_bar/Nav_bar'
import Hero from './Components/Hero/Hero'
import Features from './Components/Features/Features'
import Title from './Components/Title/Title'
import About from './Components/About/About'



const App = () => {
  return (
    <>
   
    <div>
      <Nav_bar/>
      <Hero/>
      <div className='container'>
        <Title subTitle='Specific features' Title='What We Offer'/>  
        <Features/>
        <About/>
      </div>
      
    </div>
    </>
    
  )
}

export default App