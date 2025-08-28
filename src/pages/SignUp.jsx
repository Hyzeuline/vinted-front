import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const handleNameChange = event => {
    const value = event.target.value;
    setUserName(value);
  };

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleNewsletter = event => {
    const value = event.target.checked;
    setNewsletter(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username,
          email,
          password,
          newsletter,
        }
      );

      //création de chaque cookie pour chaque value
      const token = response.data.token;
      const username = response.data.account.username;
      Cookies.set("token", token, { expire: 14 });
      Cookies.set("username", username, { expire: 14 });
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="formulaire">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Nom d'utilisateur"
            type="text"
            name="name"
            value={username}
            onChange={handleNameChange}
          />
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
        <div>
          <input
            type="checkbox"
            id="newsletter"
            name="newsletter"
            checked={newsletter}
            onChange={handleNewsletter}
          />
          <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <Link to="/">
          <button>S'inscrire</button>
        </Link>
        <Link to="/login">
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
