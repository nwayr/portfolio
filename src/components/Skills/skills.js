import React from 'react';
import './skills.css';
import robot from '../../l/robot.jpg';
import WebDesign from '../../l/web_im.JPG';
import AppDesign from '../../l/mobilee.JPG';

const Skills = () => {
    return (
        <section id='skills'>
        <span className="skillTitle"> Projects</span>
        <span className="skillDesc"> I am a skilled and passionate web designer with experience in creating </span>
        <div className="skillBars'"> 
        <div className="skillBar">
            <img src={robot} alt="HUMAN FOLLOWING ROBOT" className="skillBarImg" />
            <div className="skillBarText">
                <h2>HUMAN FOLLOWING ROBOT</h2>
                <p><br/>click here for more info </p>

            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>WEBSITE DESIGN</h2>
                <p><br/>Create websites using HTML/CSS/JAVASCRIPT/REACT JS </p>

            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Mobile App</h2>
                <p><br/> build Android / IOS Apps using java/kotlin programming languages </p>

            </div>
        </div>
     </div>
        </section>
    ); 
}

export default Skills;