import React, { useContext } from 'react'

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Home3 = () => {
  const { store } = useContext(Context);

    return (
      <>
        <h2>Soy el Home de Episodios</h2>
        <Link to="/episode" >Soy el link</Link>

        <div>
          <ul className="list-group">
          {
            store.episodes.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={`/episode/${item.id}`}>{item.name}</Link>
                </li>
              )
            })
          }
          </ul>
        </div>
      </>
    )
}

export default Home3;