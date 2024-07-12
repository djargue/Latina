import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ulatina from "/logo_ulatina.png";
import "./App.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>

      <div>
        <a href="http://localhost:5174" target="_blank">
          <img src={ulatina} className="logo" alt="Vite logo" />
        </a>

        <h2>Administración</h2>
        <p>
          <h2>LINTEC - PES - TFG</h2>
        </p>

        <p>
          <TextField label="Usuario" id="textFieldUsuario" variant="standard" />
        </p>
        <p>
          <TextField
            label="Contraseña"
            id="textFieldContrasena"
            variant="standard"
            type="password"
          />
        </p>
        <p>
          <Button class="colorVerde" variant="contained">
            Ingresar
          </Button>
        </p>
      </div>
    </>
  );
}

export default App;
