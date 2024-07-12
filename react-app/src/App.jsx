import { useState } from "react";
import reactLogo from "./assets/react.svg";
import ulatina from "/logo_ulatina.png";
import "./App.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://www.ulatina.ac.cr/sites/default/files/logo_ulatina_1_0.png"
          target="_blank"
        >
          <img src={ulatina} className="logo" alt="Vite logo" />
        </a>
      </div>

      <div>
        <h2>Adninistración</h2>
        <h2>LINTEC - PES - TFG</h2>
      </div>

      <div className="card">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <TextField
            id="input-with-icon-textfield"
            label="TextField"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Box>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
