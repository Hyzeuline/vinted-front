import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setLog }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://site--vinted-backend--zvc5szvjvznr.code.run/user/login",
        {
          email,
          password,
        }
      );
      Cookies.set("token", response.data.token);
      setLog(response.data.token);
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
        <div className="input">
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
        </div>
        <button className="login-form">Se connecter</button>
        <Link to="/signup" className="lien-signup">
          <p>Pas encore de compte ? Inscris-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default Login;
