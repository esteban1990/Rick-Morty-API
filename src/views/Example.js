import React, { useEffect, useContext} from 'react'

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Example = (props) => {
  console.log(props.match.params.id);

  const { store, actions } = useContext(Context);

  useEffect(() => {
    if (props.match.params.id !== undefined) {
      actions.loadCharacter(props.match.params.id)
    }
  }, []) // ESTE USEEFFECT ES PARA EVITAR EL LOOP, ES EQUIVALENTE A UN COMPONENTDIDMOUNT. LO MÀS IMPORTANTE SON LAS []

  return (
    <>
      {
        store.active !== undefined ?
        <h2>Soy el { store.active.name } and I am {store.active.status}</h2>
        : null
      }
      <Link to="/" >Soy el link</Link>
    </>
  )
}

export default Example;