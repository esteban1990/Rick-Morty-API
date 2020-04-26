import React, { useEffect, useContext} from 'react'

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Episodios = (props) => {
  console.log(props.match.params.id);

  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (props.match.params.id !== undefined) {
      actions.loadEpisode(props.match.params.id)
    }
  }
  , []) // ESTE USEEFFECT ES PARA EVITAR EL LOOP, ES EQUIVALENTE A UN COMPONENTDIDMOUNT. LO MÀS IMPORTANTE SON LAS []

  return (
    <>
      {
        store.episodes!== null?
      <h2>Soy el episodio{ store.episodes.episode} y mi nombre es  {store.episodes.name} </h2>
        : null
      }
      <Link to="/" >Soy el link</Link>
    </>
  )
}

export default Episodios;