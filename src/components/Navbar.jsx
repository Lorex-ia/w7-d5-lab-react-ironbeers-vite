
import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav >
      <Link to="/" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <img src="../../src/assets/home.png" alt="home" />
      </Link>
    </nav>
  )
}

export default Navbar