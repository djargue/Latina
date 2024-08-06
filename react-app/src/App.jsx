import { useState } from "react";

import "./App.css";

import LoginForm from "./Componentes/Login/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div>
        <LoginForm />
      </div>
    </>
  );
}

export default App;
