import React from 'react'
import './Hero.css'
// import dark_arrow from '../../assets/dark_arrow.png'

export const Hero = () => {
  return (
    <div className='hero container'>
       <div className="hero-text">
        <h1>We Offer Quality Learning Experiece </h1>
        <p>
            Our cutting-edge curriculum and expert instructors ensure <br />
            that you gain the skills and knowledge needed to excel in your field. <br />
            Join us today and take the first step towards a brighter future.
        </p>
        <button className='btn'>Explore more <img src="{dark_arrow}" alt="" /></button>
       </div>

    </div>
  )
}
export default Hero