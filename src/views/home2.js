import React, { useContext } from 'react'

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Home2 = () => {
  const { store } = useContext(Context);

    return (
      <>
        <h2>Soy el Home de Ubicaciones</h2>
        <Link to="/ubicacion" >Soy el link</Link>

        <div>
          <ul className="list-group">
          {
            store.locations.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/ubicacion/${item.id}`}>{item.name}</Link>
                </li>
              )
            })
          }
          </ul>
        </div>
      </>
    )
}

export default Home2;