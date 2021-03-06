import React, { useContext } from 'react'

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Home = () => {
  const { store } = useContext(Context);

    return (
      <>
        <h2>Soy el Home de Personajes</h2>
        <Link to="/personaje" >Soy el link</Link>

        <div>
          <ul className="list-group">
          {
            store.characters.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/personaje/${item.id}`}>{item.name}</Link>
                </li>
              )
            })
          }
          </ul>
        </div>
      </>
    )
}

export default Home;