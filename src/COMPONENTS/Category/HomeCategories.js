import React from 'react'
import './HomeCategories.css'
import img1 from '../../ASSETS/panner.png'
import img2 from '../../ASSETS/ghee.png'
import img3 from '../../ASSETS/milk.png'
import img4 from '../../ASSETS/sweet.png'

const HomeCategories = () => {
  return (
    <div className='homecategories'>
      <div className='container'>
        <img src={img1} alt='img1' />
        <div className='content'>
          <h1>
           cheesh
          </h1>
          <p> Milk in every cube</p>
        </div>
      </div>
      <div className='container'>
        <img src={img2} alt='img2' />
        <div className='content'>
          <h1>
            Ghee
          </h1>
          <p>Enhance food smell</p>
        </div>
      </div>
      <div className='container'>
        <img src={img3} alt='img3' />
        <div className='content'>
          <h1>
            Milk
          </h1>
          <p>Strength of the day</p>
        </div>
      </div>
      <div className='container'>
        <img src={img4} alt='img4' />
         <div className='content'>
          <h1>
            Sweets
          </h1>
          <p>Start your day with sweets</p>
        </div>
      </div>
    </div>
  )
}

export default HomeCategories