import React from 'react'
import Brightness3Icon from "@mui/icons-material/Brightness3";

const Navbar = ({style,onClick}) => {
  return (
    <div
    className="navbar"
   
    style={style}
  >
    <div>
      <h4>What is in the world ?</h4>
    </div>
    <div style={{ alignItems: "center", display: "flex" }}>
      <Brightness3Icon onClick={onClick} />
      <h4> DarkMode</h4>
    </div>
  </div>  )
}

export default Navbar