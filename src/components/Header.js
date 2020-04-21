import React from 'react'

import { Link, withRouter } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Link to="/" >Home</Link>
      <Link to="/ejemplo" >Ejemplo</Link>
    </header>
  )
}

export default withRouter(Header);