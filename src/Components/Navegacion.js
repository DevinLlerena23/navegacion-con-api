import React from "react";
import { Link } from "react-router-dom";

export default function Navegacion() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/inicio" className="nav-link">
                Inicio
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/saludos" className="nav-link">
                Saludos
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/mision" className="nav-link">
                Mision
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="/vision-pucese" className="nav-link">
                Vision de la PUCE-SE
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
