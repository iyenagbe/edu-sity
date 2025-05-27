import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials'>
        <img src="image/next-icon.png" alt=""  className='next-btn'/>
        <img src="image/back-icon.png" alt=""  className='back-btn'/>

        <div className="slider">
          <ul>
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
                  Studying sociology at Iyenagbe University of Science and Technology, has completely changed the way I see the world. 
                  The program doesn’t just teach theories—it challenges you to think critically about real social 
                  issues like inequality, identity, and power structures. The faculty are incredibly supportive 
                  and bring real-world experience into the classroom, which makes learning deeply engaging.
                   The institute also offers great resources, from research opportunities to community outreach programs,
                    helping me grow both academically and personally. 
                  I feel truly prepared to make a difference. </p>
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
                  My experience studying Computer Science at Iyenagbe University of Science and Technology, has been nothing short
                  of transformative. The curriculum is both rigorous and up-to-date with the latest in software development, AI,
                  and cybersecurity. The hands-on projects, hackathons, and internship support have helped me build real-world skills 
                  and a strong portfolio. The professors are knowledgeable, approachable, and always encouraging innovation. 
                  Thanks to the institute’s strong industry connections and cutting-edge labs, 
                  I feel confident and ready to take on a career in software engineering. </p>
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
                  Studying Human Resource Management at Iyenagbe University of Science and Technology, has been an incredibly rewarding journey.
                  The program combines theory with practical application, helping me understand the complexities of
                  organizational behavior, talent development, and labor relations. The faculty are industry professionals 
                  who bring real-life HR scenarios into the classroom, making learning both engaging and relevant.
                  The institute also provides excellent career support, including workshops, internships, and networking opportunities. 
                  I now feel confident stepping into the professional world as a future HR leader. </p>
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
                  Studying Art and Culture at Iyenagbe University of Science and Technology, has opened my eyes to the richness of 
                  human expression across time and place. The program blends history, creativity, and critical theory in a way 
                  that deepens my appreciation for diverse cultures and artistic forms. The instructors are passionate and supportive, 
                  always encouraging us to explore our own artistic voices while understanding global cultural dynamics. With access to exhibitions, workshops, 
                  and vibrant cultural events, the institute has truly become a space where I’ve grown both intellectually and creatively.
                   </p>
              </div>
            </li>
          </ul>
        </div>
      
    </div>
  )
}

export default Testimonials
