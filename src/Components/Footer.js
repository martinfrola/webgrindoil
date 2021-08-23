import React from "react";
import instagram from "../img/instagram-logo.svg";
import facebook from "../img/facebook-logo.svg";

export default function Footer() {
  const date = new Date();
  const actualDate = date.getFullYear();
  return (
    <div className="footer text-center">
      <div className="footer-redes">
        <a href="https://www.instagram.com/industriasgrindoil/" target="_blank">
          <img src={instagram} alt="icono de instagram" />
        </a>
        <a href="https://www.facebook.com/industriasgrindoil" target="_blank">
          <img src={facebook} alt="icono de facebook" />
        </a>
      </div>
      <p>
        <strong>Dirección: </strong>Parque Industrial de Coronel Dorrego.
      </p>
      <p>
        Copyright &copy;{actualDate} - Industrias Grindoil S.A. - Powered by @
        <a href="https://www.instagram.com/tench_arg/" target="_blank">
          Tench.
        </a>
      </p>
    </div>
  );
}
