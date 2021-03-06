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

  function closeNav() {
    const open = document.querySelector(".open");
    const view = document.querySelector(".view");
    console.log(open, view);
    if (open && view) {
      open.classList.remove("open");
      view.classList.remove("view");
      view.classList.add("close");
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
        <a href="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </a>

        <div className="mobile-menu">
          <button className="menu-btn" onClick={handleClick}>
            <span className="top-line"></span>
            <span className="middle-line"></span>
            <span className="bottom-line"></span>
          </button>
          <div className="menu hide">
            <Link to="/" onClick={closeNav}>
              Inicio
            </Link>
            <Link to="/produccion" onClick={closeNav}>
              Producción
            </Link>
            <Link to="/almacenamiento" onClick={closeNav}>
              Almacentamiento
            </Link>
            <Link to="/contacto" onClick={closeNav}>
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
