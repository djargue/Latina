import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);
  const [ip, setIp] = useState("");
  const navigate = useNavigate(); // Hook para navegación

  // Obtener la IP de la red
  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        setIp(data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };
    fetchIp();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      correo: usuario,
      contrasena: contrasena,
      ip: ip,
    };

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

      // Token y código de usuario en localStorage o sessionStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("codigoUsuario", data.codigoUsuario);

      // Navegar a la página principal y pasar la información del usuario y la IP
      navigate("/principal", { state: { usuario, ip } });
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
