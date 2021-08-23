import React, { useEffect } from "react";
import balanza from "../img/balanza.jpg";
import descarga from "../img/descarga.jpg";
import proceso from "../img/proceso.jpg";
import vaca from "../img/vaca.png";
import aceite from "../img/aceite.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Produccion() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".descarga", {
      scrollTrigger: {
        trigger: ".descarga",
        start: "top bottom",
        end: "+=500",
      },
      y: 300,
      opacity: 0,
    });
    gsap.from(".balanza", {
      scrollTrigger: {
        trigger: "#balanza",
        start: "top bottom",
        end: "+=500",
      },
      y: 300,
      opacity: 0,
    });
    gsap.from(".proceso", {
      scrollTrigger: {
        trigger: ".proceso",
        start: "top bottom",
        end: "+=500",
      },
      y: 300,
      opacity: 0,
    });
  }, []);

  return (
    <div className="produccion">
      <div className="header-produccion text-center">
        <h1 className="h1-title">Producción</h1>
      </div>
      <h2 className="text-center">Nuestro Proceso Productivo</h2>
      <div className="produccion-content container">
        <div className="etapa balanza">
          <img src={balanza} alt="imagen de la balanza" />
          <p>
            El proceso es completamente orgánico, ya que no interviene ningún
            componente químico en la producción de aceite y expeller.
          </p>
        </div>
        <div className="etapa descarga" id="descarga">
          <img src={descarga} alt="imagen de la descarga" />
          <p>
            El proceso se inicia con la recepción de la semilla de girasol, su
            acondicionamiento y almacenaje en planta de silos con aireación,
            posteriormente se realiza la limpieza por aspiración neumática, y el
            secado para luego ingresar al sector de extrusado donde se rompen
            las celdas de la semilla para facilitar la extracción en la etapa de
            prensado.
          </p>
        </div>
        <div className="etapa proceso">
          <img src={proceso} alt="imagen del proceso" />
          <p>
            El paso siguiente será el extrusado y prensado que le imprime a la
            semilla una presión tal, que hace que escurra el aceite, por un
            método totalmente natural, ya que se trata de un proceso mecánico,
            con ausencia de químicos.
          </p>
        </div>
        <h4 className="text-center">
          De los procesos mencionados se obtienen los dos productos
        </h4>
        <div className="productos text-center">
          <div className="producto producto-aceite">
            <img src={aceite} alt="icono de gotas de aceite" />
            <p>
              Aceite de Girasol (primera prensada) que por bombeo es dirigido al
              decantador de borras, luego a un decantador centrifugo y de allí a
              los tanques finales.
            </p>
          </div>
          <div className="producto producto-vaca">
            <img src={vaca} alt="icono de una vaca" />
            <p>
              Harina Proteica de Girasol (Expeller) que es llevada a un secador
              en el cual a través de corrientes de aire baja su humedad relativa
              permitiendo su correcto almacenaje en la celda y desde allí es
              transportado a la planta de SF Balanceados﻿﻿﻿﻿ S.A.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
