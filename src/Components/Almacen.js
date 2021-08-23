import React, { useEffect } from "react";
import almAceite from "../img/alm-aceite.jpg";
import almExp from "../img/alm-exp.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../backgrounds.css";

export default function Almacen() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".alm-aceite", {
      scrollTrigger: {
        trigger: "alm-aceite",
        start: "top bottom",
        end: "+=500",
      },
      y: 300,
      opacity: 0,
    });
    gsap.from(".alm-exp", {
      scrollTrigger: {
        trigger: ".alm-exp",
        start: "top bottom",
        end: "+=500",
      },
      y: 300,
      opacity: 0,
    });
  }, []);

  return (
    <div className="almacenamiento">
      <div className="header-almacenamiento text-center">
        <h1 className="h1-title">Almacenamiento</h1>
      </div>
      <h2 className="text-center">Nuestros espacios de almacenaje</h2>
      <div className="almacenamiento-content container">
        <div className="alm-aceite">
          <img src={almAceite} alt="imagen de la tanques de aceite" />
          <p>
            Nuestros tanques de aceite tienen una capacidad de almacenaje de 150
            toneladas de aceite crudo. Con un sistema de carga totalmente
            automatizado.
          </p>
        </div>
        <div className="alm-exp">
          <img src={almExp} alt="imagen celda de expeller" />
          <p>
            Nuestra celda de Expeller (harinas proteicas) tiene una capacidad de
            almacenaje de 500 toneladas con un sistema de descarga por gravedad
            completamente automatizado.
          </p>
        </div>
      </div>
    </div>
  );
}
