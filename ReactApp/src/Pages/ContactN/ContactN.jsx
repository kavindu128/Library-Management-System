import React from 'react'
import './ContactN.css'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import whatsapp from '../../assets/whatsapp.png'
import email from '../../assets/email.png'
import tele from '../../assets/tele.png'
import location from '../../assets/location.png'
import arrow from '../../assets/schedule.png'
import Footer from '../../Components/Footer/Footer'
const ContactN = () => {
  return (
    <>
      <div className="contactus container">
        <div className="contactus-text">
          <h1>We’re Here to Help!</h1>
          <p>Got a question, suggestion, or need assistance? Reach out to us anytime <br/>we’d love to hear from you!</p> 
        </div>
      </div>
      <div className='details container'>
        <div className="contactdetails">
          <h1>Contact Details</h1>
          <p>If you have any questions, feel free to reach out to us. We are here to help you!</p>
            <ul>
              <li><img src={email}></img>boooknest@gmail.com</li>
              <li ><img src={tele}></img>+1 123-456-7890</li>
              <li ><img src={location}></img>No 77 <br/>Galle Road<br/>Colombo 01</li>
            </ul>
        </div>

        <div className="letschat">
          <h1>Let’s Chat!</h1>
            <p>Our team is available to assist you during our business hours:</p>
              <ul>
                <li><img src={arrow}></img>Monday to Friday: 8:00 AM - 5:00 PM</li>
                <li ><img src={arrow}></img>Saturday: 9:00 AM - 1:00 PM</li>
                <li ><img src={arrow}></img>Sunday: Closed</li>
              </ul>
        </div>
        <div className="dropamsg">
          <h1>Drop Us a Message</h1>
          <p>Prefer to write? Use the form below to send us your inquiries, and we’ll respond as quickly as possible:</p>
          <form className="contact-form">
            <div>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="followus">
          <h1>Follow Us Online</h1>
          <p>Stay updated on our latest news!</p>
          <div className="icons">
          <ul>
            <li><img src={facebook} alt=""/></li>
            <li><img src={whatsapp} alt=""/></li>
            <li><img src={instagram} alt=""/></li>
            <li><img src={twitter} alt=""/></li>
            <li><img src={linkedin} alt=""/></li>    
            </ul>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default ContactN