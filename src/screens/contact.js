import React from 'react'
import "../styles/contact.css"
import {Link} from 'react-router-dom'
const Contact = () => {
  return (
    <div>
      <div className="hero">
        <p> Let's build something Great!</p>
      </div>
      <div className="summary1">
        <h1>Contact</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          non sem in dui cursus eleifend eu et nulla. Vivamus vitae feugiat est,
          ac accumsan nisi. Mauris imperdiet elit nibh, a luctus tortor ornare
          eu. Proin vel commodo ante, non vehicula lectus. Duis tempus placerat
          blandit. Nullam et lorem odio. Integer ante nisl, volutpat vitae orci
        </p>
      </div>
      <div>
      <p><a href="mailto:kumar.ajay2connect@gmail.com" className="contacts" target="_blank">Gmail</a>
      <a href="https://www.linkedin.com/in/ajay-kumar-b87905257/" className="contacts" target="_blank">Linkedin</a>
      <a href="https://github.com/ajayXkumar" className="contacts" target="_blank">Github</a>
      </p>
      </div>
      <div>
      <p>&emsp;&emsp;&emsp;&emsp;&emsp; <br></br> <br></br> <br></br> <br></br><br></br><br></br><br></br></p>
     </div>
    
    </div>
  )
}

export default Contact