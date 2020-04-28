import React, { useEffect, useContext} from 'react'

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Episodios = (props) => {
  console.log(props.match.params.id);

  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (props.match.params.id !== null) {
      actions.loadEpisode(props.match.params.id)
    }
  }
  , []) // ESTE USEEFFECT ES PARA EVITAR EL LOOP, ES EQUIVALENTE A UN COMPONENTDIDMOUNT. LO MÀS IMPORTANTE SON LAS []

  return (
    <>
      {
        store.infoEpisode!== undefined && store.infoEpisode !== null ?
      <h2>Soy el episodio{ store.infoEpisode.episode} y mi nombre es  {store.infoEpisode.name} </h2>
        : null
      }
      <Link to="/" >Soy el link</Link>
    </>
  )
}

export default Episodios;
