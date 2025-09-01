import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setLog }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();

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
    event.preventDefault(); // ça permet à la page de ne pas être rafraîchit
    try {
      //il faut récupérer les données des states pour les envoyées au serveur
      const response = await axios.post(
        "https://site--vinted-backend--zvc5szvjvznr.code.run/user/signup",
        {
          username,
          email,
          password,
          newsletter,
        }
      );
      console.log(response.data);

      //création de chaque cookie pour chaque value
      Cookies.set("token", response.data.token, { expires: 14 });
      Cookies.set("username", response.data.account.username, { expires: 14 });
      //récupération du cookies et mise à jour de la valeur log
      setLog(Cookies.get("token"));
      //rediriger nos utilisateurs vers home
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="formulaire-signup">
      <h1>S'inscrire</h1>
      <form onSubmit={handleSubmit}>
        <div className="input">
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
        <div className="newsletter">
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
        <button className="signup-form">S'inscrire</button>
        <Link to="/login" className="lien-login">
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
