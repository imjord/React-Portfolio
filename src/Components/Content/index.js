import React from 'react';
import Nav from '../Nav';
import runbuddy from './assets/images/runbuddy.PNG'
import fooder from  "./assets/images/fooder.PNG"
import coinvrt from "./assets/images/coinvrt.PNG"
import notetaker from "./assets/images/note-taker.PNG"
import deepthoughts from "./assets/images/mern.PNG"
import quizapp from "./assets/images/quiz.PNG"
import './styles.css';


function Content() {
    return(
        <section className="text-center text-lg-start bg-light text-muted">
             <Nav></Nav>
            <h1 id="contact"  className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> Projects! </h1>
            <p ><a href="https://imjord.github.io/run-buddy/"> Run Buddy </a> <img className="picture" src={runbuddy} /> </p>
            <p><a href="https://powerful-crag-64537.herokuapp.com/"> Fooder </a><img className="picture" src={fooder}/></p>
            <p ><a href="https://lukemchenry311.github.io/weekly-group-project/"> CoinVrt </a> <img  className="picture" src={coinvrt} /> </p>
            <p ><a href="https://floating-sands-37324.herokuapp.com/"> Note Taker </a><img className="picture" src={notetaker} /> </p>
            <p > <a href="https://github.com/imjord/Deep-Thoughts">Deep Thoughts </a><img  className="picture" src={deepthoughts} /> </p>
        <p > <a href="https://imjord.github.io/quiz-app/"> Quiz App </a> <img  className="picture" src={quizapp} /> </p>
        </section>
    )
}

export default Content;