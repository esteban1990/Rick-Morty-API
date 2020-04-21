import React, { useContext } from 'react'

import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Home = () => {
  const { store, actions } = useContext(Context);

    return (
      <>
        <h2>Soy el Home</h2>
        <Link to="/ejemplo" >Soy el link</Link>

        <div>
          <ul className="list-group">
          {
            store.characters.map((item, index) => {
              return (
                <li key={index}>{item.name}</li>
              )
            })
          }
          </ul>
        </div>
      </>
    )
}

export default Home;