import React from 'react';
import Nav from '../Nav';
import picture from '.../assets/images/me.jpeg'


function About(){
    return(
   

        <div className="text-center text-lg-start bg-light text-muted">
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> About </h1>
            <p> Hello and welcome to my portfolio! My name is Jordan Im an aspiring full stack web developer with experience in Javascript and MERN. My hobbies are gaming, coding and having hot coco! Thanks for reading! </p>
        </div>


    )
}



export default About;