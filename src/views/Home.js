import React from 'react'

import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <h2>Soy el Home</h2>
      <Link to="/ejemplo" >Soy el link</Link>
    </>
  )
}

export default Home;