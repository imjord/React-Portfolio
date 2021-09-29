import React from 'react';
import Nav from '../Nav';


function Content() {
    return(
        <section className="text-center text-lg-start bg-light text-muted">
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> Projects! </h1>
            <p><a> Run Buddy </a>  </p>
            <p>Fooder</p>
            <p>CoinVrt</p>
            <p>MERN Book Engine </p>
            <p> Deep Thoughts </p>
        </section>
    )
}

export default Content;