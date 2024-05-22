import React from 'react';
import './intro.css';
import bg from '../../l/avatar.png';

const Intro= () => {
    return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText"><br/>I'm <span className="introName">Elena Nwair</span> <br />Web Developer</span>
            <p className="introPara"><br/>I am a skilled web developer with experience in creating<br/>user friendly websites.</p>
            <a href="path_to_your_cv.pdf" download="Your_Name_CV.pdf" className="dbtn">Download CV</a>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
    )
}

export default Intro;