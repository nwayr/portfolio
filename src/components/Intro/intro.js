import React from 'react';
import './intro.css';
import bg from '../../l/avatar.png';
import {Link} from 'react-scroll';
import btnImg from '../../l/hirre.JPG';
const Intro= () => {
    return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello, </span>
            <span className="introText"><br/>I'm <span className="introName">Elena</span> <br />Website Designer</span>
            <p className="introPara"><br/>I am a skilled web designer with experience in creating<br/>user friendly websites.</p>
           <Link><buttton className="btn"><img src={btnImg} alt="Hire Me" className='btnImg'/> Hire Me </buttton></Link>
        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
    )
}

export default Intro;