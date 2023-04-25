import React from 'react'
import payimg from '../../ASSETS/pay.png'
import logo from '../../ASSETS/logo.jpeg'
import social from '../../ASSETS/social.png'
import './Footer2.css'
const Footer2 = () => {
  return (
    <div className='footer'>
      <div className='footerin1'>
        <div className='f1'>
          <img src={logo} alt='logo' className='logo' />
          <p>Sri Andavar Agency is a leading milk distribution store in the Perundurai,Erode. We are committed in providing the best quality milk products at the best prices.</p>
          <img src={social} alt='social' className='social' />

        </div>
        <div className='f2'>
          <h3>Links</h3>
          <p>About us</p>
          <p>Contact us</p>
          <p>About team</p>
          <p>Customer Support</p>
        </div>
        <div className='f2'>

          <h3>Our Information</h3>
          <p>Privacy policy update</p>
          <p>Terms & conditions</p>
          <p>Return Policy</p>
          <p>Site Map</p>

        </div>
       
        
      </div>
      <div className='footerin2'>
        <h3>© Copyright 2023 Sri Andavar Agency, Inc.  All rights reserved</h3>
        <img src={payimg} alt='payimg' />
      </div>
    </div>
  )
}

export default Footer2