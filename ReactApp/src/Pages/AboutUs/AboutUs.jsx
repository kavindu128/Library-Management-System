import React from 'react';
import './AboutUs.css';
import Footer from '../../Components/Footer/Footer';

const AboutUs = () => {
  return (
    <>
      <div className="aboutus">
        <div className="aboutus-text">
          <h1> BookNest</h1> 
          <h2>Library Management System</h2>
          <p>Connecting Libraries to the Future</p>
        </div>
      </div>

      <div className="container aboutus-body">
      <h1>About Us</h1>
      <p>Welcome to BookNest, your one-stop solution for efficient and user-friendly library management!</p>
      <p>At BookNest, we believe that knowledge is the cornerstone of growth, and libraries are the havens that nurture this growth. Our mission is to empower libraries of all sizes with a seamless, modern, and robust system that makes managing and accessing resources easier than ever.</p>
      
      <h2>Why Choose BookNest?</h2>
      <ul>
        <li><strong>Streamlined Management:</strong> From cataloging and issuing books to tracking returns and overdue fines, BookNest simplifies library operations.</li>
        <li><strong>User-Centric Design:</strong> Designed for both librarians and readers, our platform offers intuitive navigation and powerful search features.</li>
        <li><strong>Customizable Features:</strong> Whether you’re managing a school, university, or public library, BookNest adapts to your needs.</li>
        <li><strong>Modern Technology:</strong> Leveraging the latest advancements, BookNest provides a secure, reliable, and cloud-based solution for library management.</li>
      </ul>
      
      <h2>Our Vision</h2>
      <p>To revolutionize the way libraries function by making resource management effortless, promoting knowledge sharing, and fostering a culture of reading and learning.</p>
      
      <h2>Our Features</h2>
      <ul>
        <li>Easy book cataloging and categorization.</li>
        <li>Online access to digital and physical resources.</li>
        <li>Efficient borrowing and return management.</li>
        <li>Detailed analytics and reports for library staff.</li>
      </ul>
      
      <p>At BookNest, we’re dedicated to bridging the gap between libraries and their users, ensuring that every book finds its reader and every reader finds their book.</p>
      </div>
      <Footer/>
    </>
  )
};

export default AboutUs;