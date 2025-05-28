import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link, ScrollLink } from 'react-scroll';


export const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });

  }, []);

  return (
    <nav className= {`container ${sticky ? 'dark-navbar' : ''}`}>

        <img src="image/logo.png" alt="" className='logo'/>
        <ul>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500}></Link>About</li>
            <li><Link to='campus' smooth={true} offset={0} duration={500}></Link>Campus</li>
            <li><Link to='programs' smooth={true} offset={0} duration={500}></Link>Programs</li>
            <li><Link to='testimonials' smooth={true} offset={0} duration={500}></Link>Testimonials</li>
            <li><Link to='contact' smooth={true} offset={0} duration={500} className="btn">Contact Us</Link></li>
        </ul>
    </nav>
  )
}


export default Navbar