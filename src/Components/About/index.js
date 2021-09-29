import React from 'react';
import Nav from '../Nav';
import picture from '../About/me.jpeg'
import './styles.css'


function About(){
    return(
   

        <div className="text-center text-lg-start bg-light text-muted">
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> About </h1>
            <img id="me" src={picture} />
            <p> Hello and welcome to my portfolio! My name is Jordan Im an aspiring full stack web developer with experience in Javascript and MERN. My hobbies are gaming, coding and having hot coco! Thanks for reading! </p>
        </div>


    )
}



export default About;