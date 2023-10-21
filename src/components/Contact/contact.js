import React from 'react';
import './contact.css';
import FacebookIcon from '../../l/fb_im.JPG';
import InstagramIcon from '../../l/instaaa.JPG';
import LinkedinIcon from '../../l/linkeddd.JPG';

const Contact = () => {
    return (
    


    

      <section className="Skills" id="skills">
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
                            <h3>Java Script <span>85%</span></h3>
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
                            <h3>vs code <span>90%</span></h3>
                            <div className="bar"> <span></span></div>
                        </div>
                        <div className="progress">
                            <h3>React JS <span>90%</span></h3>
                            <div className="bar"> <span></span></div>
                        </div>
                        <div className="progress">
                            <h3>Angular <span>80%</span></h3>
                            <div className="bar"> <span></span></div>
                    </div>
                    <div className="progress">
                            <h3>node JS <span>80%</span></h3>
                            <div className="bar"> <span></span></div>
                </div>
            </div>
            </div>
            </div>





        <section id="contactPage">
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc"><br/>Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm">
                    <input type="text" className="name" placeholder='Your Name' name='your_name' />
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>  
                    <textarea className='msg' name='message' rows="5" placeholder='Your Message'>Your Message </textarea>
                    <button type='submit' value='send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link" />
                        <img src={InstagramIcon} alt="Instagram" className="link" />
                        <img src={LinkedinIcon} alt="Linkedin" className="link" />
                     </div> 
                </form>
            </div>
        </section>
        </div>
      </section>
    );
}

export default Contact;