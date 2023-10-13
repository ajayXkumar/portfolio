import React, { useState } from 'react'
import "../styles/home.css"
import { Link } from "react-router-dom"
const Home = () => {
    const [abouttext,setabout]=useState("Hello")
    const [projecttext,setproject]=useState("I am")
    const [contacttext,setcontact]=useState("Ajay")
    const handleHover=(t)=>{
       setabout(t)
    }
    const handleMouseLeave=()=>{
        setabout('Hello')
    }

    const handleHover2=()=>{
      setproject("Projects")
    }
    const handleMouseLeave2=()=>{
      setproject("I am")
    }
    const handleHover3=()=>{
      setcontact("Contact")
    }
    const handleMouseLeave3=()=>{
      setcontact("Ajay")
    }
  return (
    <div className='home'>
        <div className='texts'>
          <p>
            {<Link to ="/about" onMouseEnter={() => handleHover('About')}  onMouseLeave={handleMouseLeave} className='hello'>{abouttext}</Link>}
            {" "}
            {<Link to ="/projects" onMouseEnter={() => handleHover2('Projects')}  onMouseLeave={handleMouseLeave2} className='iam'>{projecttext}</Link>} 
            {" "}
            {<Link to ="/contact" onMouseEnter={() => handleHover3('Contact')}  onMouseLeave={handleMouseLeave3} className='iam'>{contacttext}</Link>}</p>
        </div>
        <div className='img'></div>
    </div>
  )
}

export default Home;