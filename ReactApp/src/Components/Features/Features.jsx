import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Features.css';
import feature1 from '../../assets/e-Reading.png';
import feature2 from '../../assets/Borrowing_Returning.png';
import feature3 from '../../assets/Book_Reservation.png';

const Features = () => {
  const navigate = useNavigate(); // Use navigate hook

  return (
    <div className='features'>
      <div className='feature' onClick={() => navigate('/reservation')}>
        <img src={feature1} alt='e-Reading' />
        <div className="caption"><p>e-Reading</p></div>
      </div>
      <div className='feature' onClick={() => navigate('/reservation')}>
        <img src={feature2} alt='Borrowing & Returning' />
        <div className="caption"><p>Borrowing & Returning</p></div>
      </div>
      <div className='feature' onClick={() => navigate('/reservation')}>
        <img src={feature3} alt='Reservation' />
        <div className="caption"><p>Reservation</p></div>
      </div>
    </div>
  );
};

export default Features;
