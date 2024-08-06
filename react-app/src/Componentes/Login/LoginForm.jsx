import React from "react";
import "./LoginForm.css";
import ulatina from "/logo_ulatina.png";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="login">
      <a href="http://localhost:5174" target="_blank">
        <img src={ulatina} className="logo" alt="Vite logo" />
      </a>

      <h2 className="colorGrisOscuro">Administración</h2>
      <h2 className="colorGrisOscuro">LINTEC - PES - TFG</h2>

      <form action="">
        <div className="imputBox">
          <TextField
            className="textField"
            label="Usuario"
            id="textFieldUsuario"
            variant="standard"
            required
          />
        </div>
        <div className="imputBox">
          <TextField
            className="textField"
            label="Contraseña"
            id="textFieldContrasena"
            variant="standard"
            type="password"
            required
          />
        </div>
        <div className="imputBox">
          <Button class="colorVerde" variant="contained">
            Ingresar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
