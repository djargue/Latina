import React from "react";
import Avatar from "@mui/material/Avatar";
import "./Principal.css";
import { Link } from "react-router-dom";

function Modules() {
  return (
    <div className="container">
      <header className="header">
        <img
          src="logo_ulatina.png"
          alt="Universidad Latina de Costa Rica"
          className="logo"
        />

        <div className="perfil-container">
          <Avatar>H</Avatar>
        </div>
      </header>

      <h1 className="title">Módulos</h1>

      <div className="modules-grid">
        <div className="module-card">
          <button className="module-title" type="submit">
            TFG y PES
          </button>
          <img src="tfg.png" alt="TFG y PES" className="module-image" />
        </div>

        <div className="module-card">
          <button className="module-title" type="submit">
            Lintec
          </button>
          <img src="lintec.png" alt="LINTEC" className="module-image" />
        </div>

        <div className="module-card">
          <button className="module-title" type="submit">
            Bitácoras
          </button>
          <img src="bitacoras.png" alt="BITACORAS" className="module-image" />
        </div>
      </div>

      <footer className="footer">
        <span>Nombre:</span>
        <span>Sede:</span>
        <span>Hora:</span>
        <span>Fecha:</span>
      </footer>
    </div>
  );
}

export default Modules;
