import React from "react";

export default function Contacto() {
  return (
    <div className="contacto">
      <div className="header-contacto">
        <h1 className="text-center">Contactanos</h1>
      </div>

      <div className="contacto-content container">
        <form action="" className="form text-center">
          <h2 className="text-center">Dejanos un mensaje</h2>
          <div className="campo">
            <label htmlFor="">Nombre</label>
            <input type="text" />
          </div>
          <div className="campo">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className="campo">
            <label htmlFor="">Telefono</label>
            <input type="phone" />
          </div>
          <div className="campo">
            <label htmlFor="">Deja tu mensaje</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="submit-btn">
            <button type="submit" className="btn">
              Enviar
            </button>
          </div>
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.776588339584!2d-61.3254695847956!3d-38.74588867959431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9592ad7bdb99525b%3A0x544df28633765626!2sIndustrias%20Grindoil%20S.A.!5e0!3m2!1ses-419!2sar!4v1629727875148!5m2!1ses-419!2sar"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
