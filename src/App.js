import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Produccion from "./Components/Produccion";
import Almacen from "./Components/Almacen";
import Contacto from "./Components/Contacto";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/produccion" component={Produccion} />
          <Route path="/almacenamiento" component={Almacen} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
