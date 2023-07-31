import React from 'react'
import house1 from '../assets/house-1.jpg'
import house2 from '../assets/house-2.jpg'
import house3 from '../assets/house-3.jpg'
const Refrences = () => {
  return (
    <div className='refrence-container'>
        <div className='left-refrence'>
          <h1>Our<br/>
          references</h1>
          <div className='left-refrence-img'>
          <img src={house2} alt="Missing"/>
          </div>
        </div>
        <div className='right-refrence'>
            <div className='right-refrence-img'>
            <img src={house1} alt="Missing"/>
            <img src={house3} alt="Missing"/>
            </div>
        </div>
    </div>
  )
}

export default Refrences