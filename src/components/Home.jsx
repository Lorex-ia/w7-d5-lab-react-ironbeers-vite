import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
            <Link to="/" style = {{textDecoration: "none"}}>
                <img src = "../../src/assets/beers.png" alt ="titleImg" />
                <h2 style = {{textDecoration: "none", color:"black", fontWeight: "unset"}}>Home</h2>
                <p style = {{color: "grey"}}>Lorem </p>
            </Link>
            <Link to="/allbeers" style = {{textDecoration: "none"}}>
            <img src = "../../src/assets/random-beer.png" alt ="titleImg" />
                <h2 style = {{textDecoration: "none", color:"black", fontWeight: "unset"}}>Random Beer</h2>
                <p style = {{color: "grey"}}>Lorem </p>
            </Link>
            <Link to="/randombeer" style = {{textDecoration: "none"}}>
            <img src = "../../src/assets/new-beer.png" alt ="titleImg" />
                <h2 style = {{textDecoration: "none", color:"black", fontWeight: "unset"}}>New Beer</h2>
                <p style = {{color: "grey"}}>Lorem </p>
            </Link>
    </div>
  )
}

export default Home