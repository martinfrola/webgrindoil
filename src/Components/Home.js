import React from "react";
import "../backgrounds.css";
import Clientes from "./Clientes";
import { Link } from "react-router-dom";
import iconoGirasol from "../img/icono-girasol.png";
import iconoGotas from "../img/icono-gotas.png";
import iconoQuimicos from "../img/icono-quimicos.png";

export default function Home() {
  return (
    <React.Fragment>
      <div className="home text-center">
        <div className="header">
          <div className="header-img">
            <h1 className="">INDUSTRIAS GRINDOIL S.A.</h1>
          </div>
          <div className="text-center header-title">
            <h1>INDUSTRIAS </h1>
            <h1>GRINDOIL S.A.</h1>
          </div>
        </div>

        <div className="home-description text-center container">
          <h2 className="">¡Conocenos un poco mas!</h2>
          <p>
            Somos una empresa ubicada en Coronel Dorrego dedicada a la
            elaboración de aceites y grasas sin refinar de origen vegetal.
          </p>
          <p>
            A partir de nuestra materia prima que es la semilla de girasol,
            obtenemos tanto el aceite crudo de primera prensada en frío, como el
            expeller, materia prima pricipal de SF Balanceados S.A.
          </p>
        </div>
        <div className="caracteristicas container">
          <div className="campo">
            <img src={iconoGirasol} alt="icono-girasol" />
            <p>Materia prima de calidad</p>
          </div>
          <div className="campo">
            <img src={iconoGotas} alt="icono-gotas" />
            <p>Productos Naturales</p>
          </div>
          <div className="campo">
            <img src={iconoQuimicos} alt="icono-quimicos" />
            <p>Sin Químicos</p>
          </div>
        </div>

        <div className="middle-bg"></div>

        <Clientes />

        <Link to="/contacto">
          <button className="btn btn-contactanos">Contactanos</button>
        </Link>
      </div>
    </React.Fragment>
  );
}
