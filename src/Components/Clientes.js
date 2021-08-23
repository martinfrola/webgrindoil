import React from "react";
import cliente1 from "../img/cliente1.jpg";
import cliente2 from "../img/cliente2.png";
import cliente3 from "../img/cliente3.png";
import cliente4 from "../img/cliente4.png";
import cliente5 from "../img/cliente5.png";
import cliente6 from "../img/cliente6.png";

export default function Clientes() {
  return (
    <div className="clientes container">
      <h2 className="text-center">Nuestros Clientes</h2>
      <div className="clientes-logos">
        <div className="cliente text-center">
          <img src={cliente1} alt="cliente 1" />
          <p>SF Balanceados S.A.</p>
        </div>
        <div className="cliente text-center">
          <img src={cliente2} alt="cliente 2" />
          <p>Compañía Argentina de Aceites</p>
        </div>
        <div className="cliente text-center">
          <img src={cliente3} alt="cliente 3" />
          <p>Alea y Cia S.A.</p>
        </div>
        <div className="cliente text-center">
          <img src={cliente4} alt="cliente 4" />
          <p>Agronegocios del Plata SRL</p>
        </div>
        <div className="cliente text-center">
          <img src={cliente5} alt="cliente 5" />
          <p>Molinos Rio de la Plata S.A.</p>
        </div>
        <div className="cliente text-center">
          <img src={cliente6} alt="cliente 6" />
          <p>Gente de la Pampa</p>
        </div>
      </div>
    </div>
  );
}
