import React from 'react'
import './Books.css'
import searchIcon from '../../assets/search.png'
import Title from '../../Components/Title/Title'
import category1 from '../../assets/category1.png'
import category2 from '../../assets/category2.png'
import category3 from '../../assets/category3.png'
import category4 from '../../assets/category4.png'
import category5 from '../../assets/category5.png'
import category6 from '../../assets/category6.png'
import category7 from '../../assets/category7.png'
import category8 from '../../assets/category8.png'
import category9 from '../../assets/category9.png'
import category10 from '../../assets/category10.png'
import Footer from '../../Components/Footer/Footer'


const Books = () => {
  return (
    <>
      <div className='books'>
        <div className="search-container">
          <input type="text" placeholder="Search books..." className="search-input" />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>
      </div>
      <div>
        <Title subTitle='Categories' Title='You Can Read'/>
      </div>
      <div className="container categories">
        <div className='category'>
          <img src={category1} alt=''/>
          <div className="caption">
            <p>Dictionaries, Encyclopedias, Atlases, and Handbooks</p>
          </div>
        </div>

        <div className='category'>
          <img src={category2} alt=''/>
          <div className="caption">
            <p>Course-related books for various disciplines</p>
          </div>
        </div>

        <div className='category'>
          <img src={category3} alt=''/>
          <div className="caption">
            <p>Academic research papers, journals, and theses.</p>
          </div>
        </div>

        <div className='category'>
          <img src={category4} alt=''/>
          <div className="caption">
            <p>Novels, short stories, poetry, and drama.</p>
          </div>
        </div>

        <div className='category'>
          <img src={category5} alt=''/>
          <div className="caption">
            <p>Biographies, History, Philosophy, and Self-Help.</p>
          </div>
        </div>

        
      </div>
      <div className="container categories">
      <div className='category'>
          <img src={category6} alt=''/>
          <div className="caption">
            <p>Books on Engineering, IT, Physics, Chemistry, and Biology.</p>
          </div>
        </div>

        <div className='category'>
          <img src={category7} alt=''/>
          <div className="caption">
            <p>Books on Management, Marketing, Finance, and Economics.</p>
          </div>
        </div>

        <div className='category'>
          <img src={category8} alt=''/>
          <div className="caption">
            <p>Books on Sociology, Psychology, Political Science, and Arts.</p>
          </div>
        </div>

        <div className='category'>
          <img src={category9} alt=''/>
          <div className="caption">
            <p>Audiobooks, E-books, DVDs, and CDs.</p>
          </div>
        </div>

        <div className='category'>
          <img src={category10} alt=''/>
          <div className="caption">
            <p>Rare books, archives, and institutional publications.</p>
          </div>
        </div>
      </div>

    <Footer/>
    </>

  )
}

export default Books