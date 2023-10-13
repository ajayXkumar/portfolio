import React from 'react'
import "../styles/navbar.css"
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
const Navbar = () => {
  return (
    <div className="linked" >
    <Link to ="/" ><ArrowBackIcon/></Link>
    </div>
  )
}

export default Navbar