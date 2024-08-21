import React, { useState } from "react";
import "./LoginForm.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      correo: usuario,
      contrasena: contrasena,
    };

    //
    // corregir el api//
    try {
      const response = await fetch("https://tudominio.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // Aquí guardarías el token en el local storage o en el estado global (ej. Redux)
      localStorage.setItem("token", data.token);

      // Redirige al usuario a otra página después de un login exitoso
      window.location.href = "/dashboard";
    } catch (error) {
      setError("Usuario o contraseña incorrectos");
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <img
        className="logo"
        src="logo_ulatina.png"
        alt="Universidad Latina de Costa Rica"
      />
      <div className="login-container">
        <h1>Administración PeTLin</h1>
        <form onSubmit={handleLogin}>
          <h3> Usuario</h3>
          <input
            type="text"
            placeholder="Digite su Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />

          <h3> Contraseña</h3>
          <input
            type="password"
            placeholder="Contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </>
  );
}

export default Login;
