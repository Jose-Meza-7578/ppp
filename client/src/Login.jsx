import React, { useEffect } from "react";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [contra, setContra] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { username, contra })
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    handleSubmit();
  }, []);
  return (
    <div>
      <div>
        <form action="">
          <div>
            <label htmlFor="">Usuario</label>
            <input
              type="text"
              placeholder="Inserte Usuario"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input
              type="password"
              placeholder="Inserte Contraseña"
              onChange={(e) => setContra(e.target.value)}
            />
          </div>
          <button>Ingresar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
