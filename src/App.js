import React from "react";
import {BrowserRouter, Switch,  Route } from "react-router-dom";
import Home from './Components/Home'
import Produccion from './Components/Produccion'
import Almacen from './Components/Almacen'
import Contacto from './Components/Contacto'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/produccion" component={Produccion} />
          <Route path="/almacen" component={Almacen} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
    )
}

export default App;
