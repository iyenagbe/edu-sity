import React from "react";
import './About.css';
import about_img from '../../assets/about.jpg';
import play_icon from '../../assets/play-icon.png';



const About = () => {
    return(
        <div className="about">
            <div className="about-left">
                <img src="about-img" alt="" className="about-img" />
                <img src="play_icon" alt="" className="play_icon" />
            </div>

            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>
                    Welcome to Our University
                    <br />
                    Where Knowledge Meets Innovation
                </h2>
            </div>



            {/* <h1>About Us</h1>
            <p>We are a leading institution dedicated to providing 
                quality education and fostering innovation.</p>

            <p>Our mission is to empower students with the knowledge 
                and skills they need to succeed in their careers.</p> */}
        </div>
    )
}

export default About;