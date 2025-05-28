import React from 'react'
import './Contact.css'


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src="image/msg-icon.png" alt="" /></h3>
        <p>Feel free to reach out through the contact form or find the contact info below. 
          Your feedback, questions, <br/> and suggestions are important to us as we 
          strive to provide exceptional service to our university community
        </p>

        <ul>
          <li> <img src="image/mail-icon.png" alt="" /> iyenagberaymond@gmail.com</li>
          <li> <img src="image/phone-icon.png" alt="" /> +234 8121264733</li>
          <li> <img src="image/location-icon.png" alt="" /> 77 New Benin, Benin City Edo State Nigeria</li>
        </ul>

      </div>
      <div className="contact-col">
        <form>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          <label>Your email</label>
          <input type="email" name='email' placeholder='Enter your email' required />

          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required />

          <label>Message</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required ></textarea>

          <button type='submit' className='btn dark-btn'>Send Message <img src="image/white-arrow.png" alt="" /></button>
        </form>

        <span></span>

      </div>
    </div>
  )
}

export default Contact
