import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

export default function Nav() {
  function handleClick() {
    const menu = document.querySelector(".menu-btn");
    const list = document.querySelector(".menu");
    const hide = document.querySelector(".hide");
    if (hide) {
      list.classList.remove("hide");
      setTimeout(() => {
        menu.classList.toggle("open");
        list.classList.toggle("view");
      }, 100);
    } else {
      menu.classList.toggle("open");
      list.classList.toggle("view");
      list.classList.toggle("close");
    }
  }

  window.addEventListener("resize", () => {
    const menu = document.querySelector(".menu-btn");
    const list = document.querySelector(".menu");

    if (window.innerWidth > 1024) {
      list.classList.remove("view");
      list.classList.remove("close");
      menu.classList.remove("open");
      list.classList.add("hide");
    }
  });

  return (
    <div className="nav-bg">
      <div className="nav-content">
        <img src={logo} alt="logo" className="nav-logo" />
        <div className="mobile-menu">
          <button className="menu-btn" onClick={handleClick}>
            <span className="top-line"></span>
            <span className="middle-line"></span>
            <span className="bottom-line"></span>
          </button>
          <div className="menu hide">
            <Link to="/">Inicio</Link>
            <Link to="/deportes">Producción</Link>
            <Link to="/tusturnos">Almacentamiento</Link>
            <Link to="/tusturnos">Contacto</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
