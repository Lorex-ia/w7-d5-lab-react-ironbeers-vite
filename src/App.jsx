import { useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import AllBeers from './components/AllBeers'
import Home from './components/Home'
import Navbar from './components/Navbar'
import RandomBeer from './components/RandomBeer'

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/allbeers" element={<AllBeers /> } />
        <Route path="/:id" element={<AllBeers /> } />
        <Route path="/random" element={<RandomBeer /> } />
        <Route path="/search?q={query}" element={<RandomBeer /> } />
      </Routes>
    </div>
  )
}

export default App