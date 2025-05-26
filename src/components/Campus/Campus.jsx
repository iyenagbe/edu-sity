import React from 'react'
import './Campus.css'




const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src="image/gallery-1.png" alt="" />
            <img src="image/gallery-2.png" alt="" />
            <img src="image/gallery-3.png" alt="" />
            <img src="image/gallery-4.png" alt="" />
        </div>
      
      <button className='btn dark-btn'>See more here <img src="image/white-arrow.png" alt="" /> </button>
    </div>
  )
}

export default Campus
