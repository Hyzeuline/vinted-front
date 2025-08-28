import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [data, setData] = useState(null);

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
      setData(response.data);
      console.log(response.data);
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
        <button>S'inscrire</button>
        <Link to="/login">
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
