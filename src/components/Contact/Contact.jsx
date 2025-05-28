import React from 'react'
import './Contact.css'


const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "cfb2d3bf-9663-4ffe-89e8-8b0c114117d4"); // Replace with your own key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Network error. Please try again later.");
    }
  };


  // const [result, setResult] = React.useState("");

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   setResult("Sending....");
  //   const formData = new FormData(event.target);

  //   formData.append("access_key", "cfb2d3bf-9663-4ffe-89e8-8b0c114117d4");

  //   const response = await fetch("https://api.web3forms.com/submit", {
  //     method: "POST",
  //     body: formData
  //   }).then((res) => res.json());

  //   if (res.success) {
  //     console.log("Success", res);
  //     event.target.reset();
  //   } else {
  //     console.log("Error", res);
  //     setResult(res.message);
  //   }
  // };



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

        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />

          {/* <label>Your email</label>
          <input type="email" name='email' placeholder='Enter your email' required /> */}

          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required />

          <label>Message</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required ></textarea>

          <button type='submit' className='btn dark-btn'>Send Message <img src="image/white-arrow.png" alt="" /></button>
        </form>

        <span>{result}</span>

      </div>
    </div>
  )
}

export default Contact;
