import React from 'react'
import './Contact.css'
import msgicon from '../../assets/msg.png'
import email from '../../assets/email.png'
import tele from '../../assets/tele.png'
import location from '../../assets/location.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'

const Contact = () => {
    const newLocal = (
        <div className="contact-col">
            <h3>Send us a message<img src={msgicon}alt=""/></h3>
            <p>If you have any questions, feel free to reach out to us. We are here to help you!</p>
            <ul>
                <li><img src={email} alt=""/>boooknest@gmail.com</li>
                <li ><img src={tele} alt=""/>+1 123-456-7890</li>
                <li ><img src={location} alt=""/>No 77 <br/>Galle Road<br/>Colombo 01</li>
            </ul>
        </div>
    )

    const socialLinks = (
        <div className="social">
            <div className="follow-us">
                <h3>Follow us</h3>
                <p>Stay updated on our latest news!</p>
            </div>
        
            <div className="social-icons">
            <ul>
                <li><img src={facebook} alt=""/></li>
                <li><img src={whatsapp} alt=""/></li>
                <li><img src={instagram} alt=""/></li>
                <li><img src={twitter} alt=""/></li>
                <li><img src={linkedin} alt=""/></li>    
            </ul>
        
            </div>
       </div> 
            
    )

  return (
    <div className="contact">
        <div className="contact-col">
            {newLocal}
        </div>
        <div className="social">
            {socialLinks}
        </div>
    </div>
  )
}

export default Contact