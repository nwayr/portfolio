import React from 'react';
import './works.css';

const Works = () => {
    return (
        <section id='works'>
          <h2 className="worksTitle">About ME</h2>
            <ul>
              <h3 className="edu">Education</h3><br/>
              <li><span> BS-Computer Science</span><br/><br/><h4 className="uni">American University of Culture and Education (AUCE)</h4></li>
              <br/>
              <li><span>Cumulative GPA: </span>3.8 / 4</li> 
            </ul>
         <br/>
            <ul>
              <h3 className="lan">Languages</h3><br/>
              <li><span> English</span></li><br/>
              <li><span> Arabic</span></li><br/>
              <li><span> Spanish</span></li> <br/>
              <li><span> French</span></li> 
            </ul>
        </section>
    );
   }
export default Works;