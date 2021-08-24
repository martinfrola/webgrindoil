import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/firestore";
import Swal from "sweetalert2";

export default function Contacto(props) {
  useEffect(() => {
    if (props.location.pathname === "/contacto") {
      window.scrollTo(0, 0);
    }
  });

  const [mensaje, setMensaje] = useState({
    nombre: "",
    email: "",
    tel: "",
    msg: "",
  });

  function handleChange(e) {
    setMensaje({
      ...mensaje,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      (mensaje.nombre === "") |
      (mensaje.email === "") |
      (mensaje.tel === "") |
      (mensaje.msg === "")
    ) {
      Swal.fire({
        title: "Error",
        text: "Falta completar algún campo.",
        icon: "error",
        showConfirmButton: false,
        timer: 5000,
        timerProgressBar: true,
      });
    } else {
      const db = firebase.firestore();
      db.collection("mensajes")
        .add(mensaje)
        .then((docRef) => {
          Swal.fire({
            title: "Mensaje Enviado",
            text: "¡Muchas gracias por contactarte! Estaremos en contacto a la brevedad.",
            icon: "success",
            iconColor: "rgb(5, 125, 9)",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
          });
        })
        .catch((error) => {
          Swal.fire({
            title: "Ups!",
            text: "Hubo un error al conectar con la base de datos. Intenta de nuevo mas tarde.",
            icon: "error",
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
          });
        });
    }
  }
  return (
    <div className="contacto">
      <div className="header-contacto">
        <h1 className="text-center">Contactanos</h1>
      </div>

      <div className="contacto-content container">
        <form action="" className="form text-center" onSubmit={handleSubmit}>
          <h2 className="text-center">Dejanos un mensaje</h2>
          <div className="campo">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={handleChange}
            />
          </div>
          <div className="campo">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="campo">
            <label htmlFor="tel">Telefono</label>
            <input type="phone" id="tel" name="tel" onChange={handleChange} />
          </div>
          <div className="campo">
            <label htmlFor="msg">Deja tu mensaje</label>
            <textarea name="msg" id="msg" onChange={handleChange}></textarea>
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
