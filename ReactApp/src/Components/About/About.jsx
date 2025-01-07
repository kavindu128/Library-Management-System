import React from 'react'
import './About.css'
import aboutimg from '../../assets/about.png'
import playbtn from '../../assets/play.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={aboutimg} alt="" className='aboutimg'/>
            <img src={playbtn} alt="" className='playbtn'/>
        </div>
        <div className="about-right">
            <h3>About Library</h3>
            <h2>Unlocking Wisdom, Page by Page</h2>
            <p>Libraries are sanctuaries of knowledge and creativity, serving as a cornerstone for education and lifelong learning. They house a diverse collection of books, journals, digital resources, and multimedia that cater to a wide range of interests and age groups. Whether it's academic research, personal development, or leisure reading, libraries provide an environment where everyone can explore and discover new ideas.</p>
            <p>Beyond being repositories of information, libraries are dynamic community spaces that foster connection and collaboration. They often host workshops, reading programs, and events that encourage interaction and the sharing of knowledge. With comfortable seating, quiet study areas, and access to technology, libraries accommodate the needs of both individual learners and collaborative groups.</p>
            <p>In the digital age, libraries have evolved to integrate technology, offering online catalogs, e-books, and virtual learning platforms. This adaptability ensures that they remain relevant and accessible to a tech-savvy generation. A library is more than a building; it is a gateway to wisdom, creativity, and inspiration, empowering individuals to grow and thrive in an ever-changing world.</p>

        </div>

    </div>
  )
}

export default About