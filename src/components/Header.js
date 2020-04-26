
import React from 'react'

import { Link, withRouter } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Link to="/" >Personajes</Link>
      <Link to ="/ubicacion">Ubicaciones</Link>
      <Link to ="/episode">Episodios</Link>
    </header>
  )
}

export default withRouter(Header);