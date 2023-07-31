import React from 'react'
import Banners from '../assets/banner.jpg'
const Banner = () => {
  return (
    <div className='banner'>
     <div className='banner-title'>
       <p>Advice & guidance</p><br/>
      <div className='banner-description'>
      <p>We are happy to assist with advice or deliveries for your next project. Get in touch with us!</p>
      <p style={{textDecoration:"underline"}}>
        Telephone: 69 87 85 00<br/>
        E-mail: post@konseptfasade.no 
        </p>
      </div>
     </div>
     <div className='banner-img'>
        <img src={Banners} alt="Missing"/>
      </div>
    </div>
  )
}

export default Banner