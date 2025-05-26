import React, { useEffect, useState } from 'react'
import './Navbar.css'
// import Logo from '../../assets/logo.png'



export const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

  }, []);

  return (
    <nav className= {`container ${sticky ? 'dark-navbar' : ''}`}>

        <img src='{images/Logo}' alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Campus</li>
            <li>Programs</li>
            <li>Testimonials</li>
            <li><button className="btn">Contact Us</button></li>
        </ul>
    </nav>
  )
}


export default Navbar