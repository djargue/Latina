import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./App.css";

function App() {
  const [bitacoras, setBitacoras] = useState([]);

  useEffect(() => {
    const fetchBitacoras = async () => {
      try {
        const response = await fetch("https://tuapi.com/bitacoras");
        const data = await response.json();
        setBitacoras(data);
      } catch (error) {
        console.error("Error fetching bitacoras:", error);
      }
    };

    fetchBitacoras();
  }, []);

  return (
    <Router>
      <div className="container">
        <header className="header">
          <img
            src="logo_ulatina.png"
            alt="Universidad Latina de Costa Rica"
            className="logo"
          />
          <nav className="menu">
            <NavLink to="/" exact activeClassName="active">
              Inicio
            </NavLink>
            <NavLink to="/tfg-pes" activeClassName="active">
              TFG - PES
            </NavLink>
            <NavLink to="/lintec" activeClassName="active">
              LINTEC
            </NavLink>
            <NavLink to="/bitacoras" activeClassName="active">
              Bitácoras
            </NavLink>
          </nav>
          <div className="perfil-container">
            <Avatar>H</Avatar>
          </div>
        </header>

        <Switch>
          <Route path="/" exact>
            <h1>Bienvenido a la Plataforma</h1>
          </Route>
          <Route path="/tfg-pes">
            <h1>TFG - PES</h1>
            {/* Aquí podrías añadir el contenido específico para TFG - PES */}
          </Route>
          <Route path="/lintec">
            <h1>LINTEC</h1>
            {/* Aquí podrías añadir el contenido específico para LINTEC */}
          </Route>
          <Route path="/bitacoras">
            <h1 className="bitacoras-title">Bitácoras</h1>
            <div className="bitacoras-menu">
              <select>
                <option>Módulo Usuarios</option>
                {/* Añade más opciones según sea necesario */}
              </select>
              <button>Filtrar</button>
              <input type="text" placeholder="Buscar" />
            </div>
            <table className="bitacoras-table">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Sede</th>
                  <th>Fecha</th>
                  <th>Dispositivo</th>
                </tr>
              </thead>
              <tbody>
                {bitacoras.map((bitacora, index) => (
                  <tr key={index}>
                    <td>{bitacora.nombre}</td>
                    <td>{bitacora.sede}</td>
                    <td>{bitacora.fecha}</td>
                    <td>{bitacora.dispositivo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Route>
        </Switch>

        <footer className="footer">
          <span>Gabriel Jimenez Fernandez</span>
          <span>Sede de Heredia</span>
          <span>6:30 AM</span>
          <span>3/30/2017</span>
        </footer>
      </div>
    </Router>
  );
}

export default App;
