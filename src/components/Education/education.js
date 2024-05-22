import React from 'react';
import './education.css';

const Education = () => {
    return (
    
      <section className="Education" id="education">
        <h2 className="heading">My <span>Skills</span></h2>

        <div className="skills-row">
            <div className="skills-column">
                <h3 className="title">Coding Skills</h3>
                <div className="skills-box">
                    <div className="skills-content">
                        <div className="progress">
                            <h3>HTML <span>100%</span></h3>
                            <div className="bar"> <span></span></div>
                        </div>
                        <div className="progress">
                            <h3>CSS <span>100%</span></h3>
                            <div className="bar"> <span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Java Script <span>100%</span></h3>
                            <div className="bar"> <span></span></div>
                    </div>
                    <div className="progress">
                            <h3>PHP <span>90%</span></h3>
                            <div className="bar"> <span></span></div>
                </div>
            </div>
            </div>
            </div>

            <div className="skills-column">
                <h3 className="title">Frame Works</h3>
                <div className="skills-box">
                    <div className="skills-content">
                        <div className="progress">
                            <h3>React JS <span>90%</span></h3>
                            <div className="bar"> <span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Angular <span>80%</span></h3>
                            <div className="bar"> <span></span></div>
                    </div>
                    <div className="progress">
                            <h3>Node JS <span>90%</span></h3>
                            <div className="bar"> <span></span></div>
                </div>
                        <div className="progress">
                            <h3>Next JS <span>90%</span></h3>
                            <div className="bar"> <span></span></div>
                        </div>
            </div>
            </div>
            </div>


        </div>
      </section>
    );
}

export default Education;