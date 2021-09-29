import React from "react";
import Nav from '../Nav';






function Resume(){
    return(
       
        <div className="text-center text-lg-start bg-light text-muted">
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> Resume </h1>
            <a href='https://drive.google.com/file/d/1Z7YTwnCtH2_wXLYI09D3mLp9pPFw75z5/view?usp=sharing'> My resume </a>
            <p> Here is my updated 2021 Resume! </p>
        </div>
    )
}





export default Resume;