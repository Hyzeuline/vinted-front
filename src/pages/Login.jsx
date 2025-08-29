import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = ({ setLog }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        " https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      setLog(Cookies.get("token"));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };

  return (
    <div className="formulaire-login">
      <form onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
        <input
          placeholder="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          placeholder="Mot de passe"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button>Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
