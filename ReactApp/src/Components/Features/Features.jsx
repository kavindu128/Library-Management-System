import React from 'react'
import './Features.css'
import feature1 from '../../assets/e-Reading.png'
import feature2 from '../../assets/Borrowing_Returning.png'
import feature3 from '../../assets/Book_Reservation.png'


const Features = () => {
  return (
    <div className='features'>
        <div className='feature'>
            <img src={feature1} alt=''/>
            <div className="caption">
                <p>e-Reading</p>
            </div>

        </div>
        <div className='feature'>
            <img src={feature2} alt=''/>
            <div className="caption">
                <p>Borrowing & Returning</p>
            </div>
        </div>
        <div className='feature'>
            <img src={feature3} alt=''/>
            <div className="caption">
                <p>Book Reservation</p>
            </div>
        </div>

    </div>
  )
}

export default Features