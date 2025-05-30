import React from "react";
import './About.css';





const About = ({setPlayerState}) => {
    return(
        <div className="about">
            <div className="about-left">
                <img src="image/about.png" alt="" className="about-img" />
                <img src="image/play-icon.png" alt="" className="play-icon" onClick={()=>
                    {setPlayerState(true)}}/>
            </div>

            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>
                    Welcome to Iyenagbe University of Science and Technology
                    <br /> <br />
                    Where Knowledge Meets Innovation
                </h2>

                <p>We are a leading institution dedicated to providing 
                quality education and fostering innovation.</p>

            <p>Our mission is to empower students with the knowledge 
                and skills they need to succeed in their careers.</p> 
            </div>
        </div>
    )
}

export default About;