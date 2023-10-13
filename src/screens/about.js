import React from "react";
import "../styles/about.css";
const About = () => {
  return (
    <div>
      <div className="maintext">
        <p> I design & build digital products</p>
      </div>
      <div className="summary">
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          non sem in dui cursus eleifend eu et nulla. Vivamus vitae feugiat est,
          ac accumsan nisi. Mauris imperdiet elit nibh, a luctus tortor ornare
          eu. Proin vel commodo ante, non vehicula lectus. Duis tempus placerat
          blandit. Nullam et lorem odio. Integer ante nisl, volutpat vitae orci
        </p>
      </div>
      <div className="education">
        <h2>Education</h2>
         <div className="college">
         
          <p><span style={{fontWeight:"bold"}}>B.tech</span>&emsp; - &emsp;National Institute of Technology , Jalandhar  </p>
          <p><span style={{fontWeight:"bold"}}>12th </span>&emsp; - &emsp;  Rajat Vidyapeeth Sr Sec School , Sikar </p>
          <p><span style={{fontWeight:"bold"}}>10th </span>&emsp; - &emsp;  Subhash Chandra Bose Sr Sec School , Sahawa </p>
         </div>
         <div>
         </div>
      </div>
      <div className="Skills">
        <h2 >Skills</h2>
         <div>
          <p>HTML5 , CSS , Javascript , React , NodeJS ,MongoDB , SQL , C++ , OOPS , OS  </p>
         </div>
         <div>
         </div>
      </div>
      <div className="resume">
          <p style={{color:"red" ,fontWeight:"bold"}}>my resume (pdf 109kb)</p>
         <div>
         </div>
      
      </div>
     <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp; <br></br> <br></br> <br></br> <br></br><br></br><br></br><br></br></p>
     </div>
    </div>
  );
};

export default About;
