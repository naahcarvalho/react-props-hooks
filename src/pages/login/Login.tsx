import { useState } from "react";
import Home from "../home/Home";

function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (usuario === "admin" && senha === "123") {
      setIsLogged(true);
    } else {
      alert("Usuário ou senha inválidos");
    }
  }

  return (
    <>
      {isLogged ? (
        <Home titulo="Componente Home" texto={`Bem-vindo de volta!`} />
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Componente Login</h2>

          <input
            type="text"
            placeholder="Usuário"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>
      )}
    </>
  );
}

export default Login;
