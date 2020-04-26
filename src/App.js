import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import injectContext from "./store/appContext";

import Header from './components/Header'

import Home from './views/Home'
import Home2 from './views/home2'
import Home3 from "./views/home3"
import Personajes from './views/personajes'
import Ubicaciones from "./views/ubicaciones"
import Episodios from "./views/episodios"


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/personaje/:id" component={Personajes}  />
          <Route exact path = "/ubicacion" component={Home2}  />
          <Route exact path="/ubicacion/:id" component={Ubicaciones}  />
          <Route exact path ="/episode" component={Home3} />
          <Route exact path ="/episode/:id" component={Episodios} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
