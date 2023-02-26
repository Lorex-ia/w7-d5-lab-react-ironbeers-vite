import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar'
import { useState } from 'react'

function Beers() {
  const [beers, setBeers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");


  // The axios API call to get all the beers: 
  const getBeers = () => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => {
        setBeers(response.data);
        setIsLoading(false);
      })
      .catch((err) => console.log("Error fetching all beers: ", err));
  }

  // Call getBeers function when the component is mounted
  React.useEffect(() => {
    getBeers();
  }, []);

  return (
    isLoading ? <div>Loading...</div> :
    <>
      <Navbar />

      <div className="searchInputCtn">
        <input className="searchInput" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>

      {beers.filter(beer => beer.name.startsWith(searchTerm)).map((beer) => {
      {/* {beers.map((beer) => { */}
        return (
          <Link to={"/" + beer._id} key={beer._id} style={{textDecoration: "none", color: "black", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <div className="beerCard" style= {{marginBottom:"50px"}}>
              <div className="beerCardImgCtn" style={{height: "200px", display:"flex", justifyContent:"center", alignItems:"center"}}>
                <img src={beer.image_url} alt={beer.name} style={{height: "200px", display:"flex", justifyContent:"center", alignItems:"center"}}/>
              </div>
              <div className="beerCardInfoCtn">
                <h3>{beer.name}</h3>
                <h4>{beer.tagline}</h4>
                <p>Created by: {beer.name}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  )
}

export default Beers
