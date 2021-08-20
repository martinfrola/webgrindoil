import React from "react";
import Nav from "./Nav";
import "../backgrounds.css";

export default function Home() {
  return (
    <React.Fragment>
      <Nav />
      <div className="home">
        <div className="header"></div>
        <div className="home-description text-center container">
          <h2 className="">INDUSTRIAS GRINDOIL S.A.</h2>
          <p>
            Somos una empresa dedicada a la elaboración de aceites y grasas sin
            refinar de origen vegetal.
          </p>
          <p>
            A partir de nuestra materia prima que es la semilla de girasol,
            obtenemos tanto el aceite crudo de primera prensada en frío, como el
            expeller, materia prima pricipal de SF Balanceados S.A.
          </p>
          <p>
            Todos nuestros productos se destacan por ser naturales, de alta
            calidad y sin presencia de químicos.
          </p>
        </div>
        <div className="clientes container">
          <h2 className="text-center">Nuestros Clientes</h2>
          <div className="clientes-logos"></div>
        </div>
        <div className="middle-bg">
          <h2 className="text-center">Esto es un foton!</h2>
        </div>
      </div>
    </React.Fragment>
  );
}
