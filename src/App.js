import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from './components/Header'

import Home from './views/Home'
import Example from './views/Example'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />

        <Switch>
          <Route exact path="/" component={Home}  />
          <Route exact path="/ejemplo" component={Example}  />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
