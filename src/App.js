import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Home from "./Components/Home";
// import Produccion from "./Components/Produccion";
// import Almacen from "./Components/Almacen";
// import Contacto from "./Components/Contacto";
// import Nav from "./Components/Nav";
// import Footer from "./Components/Footer";
import loading from "./img/loading-icon.svg";

function App(props) {
  const Home = lazy(() => import("./Components/Home"));
  const Produccion = lazy(() => import("./Components/Produccion"));
  const Almacen = lazy(() => import("./Components/Almacen"));
  const Contacto = lazy(() => import("./Components/Contacto"));
  const Nav = lazy(() => import("./Components/Nav"));
  const Footer = lazy(() => import("./Components/Footer"));

  const renderLoader = () => (
    <img src={loading} alt="icono de carga" className="loading" />
  );
  return (
    <Suspense fallback={renderLoader()}>
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
    </Suspense>
  );
}

export default App;
