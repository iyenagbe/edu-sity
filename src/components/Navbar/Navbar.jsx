import React from 'react'
import './Navbar.css'
import Logo from '../../assets/logo.png'

export const Navbar = () => {
  return (
    <nav className='container'>
        <img src={Logo} alt="" className='logo'/>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Canpus</li>
            <li>Programs</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}


export default Navbar