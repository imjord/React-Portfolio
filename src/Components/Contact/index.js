import React from "react";
import Nav from '../Nav';






function Contact(){
    return(
       
        <div className="text-center text-lg-start bg-light text-muted">
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> Contact </h1>
            <form>
                <input type="hidden" name="contact_number" />

                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                  
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    
                />

                <input
                    type="text"
                    placeholder="Message..."
                    name="message"
                   
                />
                <button type="submit">
                    Submit
                </button>
            </form>
            <a href="https://github.com/imjord" target="_blank">github</a>
        </div>
    )
}





export default Contact;