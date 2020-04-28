import React, { useEffect, useContext } from 'react'

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


const Ubicaciones = (props) => {
    console.log(props.match.params.id);

    const { store, actions } = useContext(Context);

    useEffect(() => {
        if (props.match.params.id !== null) {
            actions.loadLocation(props.match.params.id)
        }
    }
        , []) // ESTE USEEFFECT ES PARA EVITAR EL LOOP, ES EQUIVALENTE A UN COMPONENTDIDMOUNT. LO MÀS IMPORTANTE SON LAS []

    return (
        <>
           {
        store.infoLocation !== undefined && store.infoLocation!== null ?
        <h2>Me ubico en  { store.infoLocation.name } y es de tipo {store.infoLocation.type}</h2>
        : null
      }
      <Link to="/" >Soy el link</Link>
      </>
            )
    }

 export default Ubicaciones;
