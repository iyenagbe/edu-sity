import React, { useRef } from 'react'
import './Testimonials.css'

const Testimonials = () => {

const slider = useRef();
let tx = 0;

const slideForward = () => {
  if (tx > -50){
    tx -= 25;
  }
    slider.current.style.transform = `translateX(${tx}%)`;
}

const slidebackward = () => {
  if (tx < 0){
    tx += 25; 
  }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
        <img src="image/next-icon.png" alt=""  className='next-btn' onClick={slideForward}/>
        <img src="image/back-icon.png" alt=""  className='back-btn' onClick={slidebackward}/>

        <div className="slider">
          <ul ref ={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src="image/user-1.png" alt="" />
                  <div>
                    <h3>Jennifer Ofeh</h3>
                    <span>Sociology</span>
                  </div>
                </div>
                <p>
                  Studying sociology at Iyenagbe University of Science and Technology, has  opened my eyes to how society really works. 
                  It’s made me more aware, thoughtful, and ready to drive social change.. </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src="image/user-2.png" alt="" />
                  <div>
                    <h3>Iyenagbe Raymond</h3>
                    <span>Computer Science/Software Engineer</span>
                  </div>
                </div>
                <p>
                  Studying Computer Science at Iyenagbe University of Science and Technology 
                  gave me real-world coding 
                  skills and the confidence to build a tech career. </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src="image/user-3.png" alt="" />
                  <div>
                    <h3>Joe Pheona</h3>
                    <span>Department of Human Resource</span>
                  </div>
                </div>
                <p>
                  At Iyenagbe University of Science and Technology, I gained practical HR 
                  knowledge and leadership skills that prepared me for the workplace. </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src="image/user-4.png" alt="" />
                  <div>
                    <h3>Israel Wewe</h3>
                    <span>Department of Art and Culture</span>
                  </div>
                </div>
                <p>
                  Iyenagbe University of Science and Technology helped me explore creativity and understand diverse 
                  cultures through art in a truly inspiring environment.
                   </p>
              </div>
            </li>
          </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
