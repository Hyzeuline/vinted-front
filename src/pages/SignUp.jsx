import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const SignUp = () => {
  const [name, setName] = useState(Cookies.get("userName") || "");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);

  const handleNameChange = event => {
    const value = event.target.value;
    setName(value);
  };

  const handleEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = event => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(email, password);
  };

  const handleChecked = event => {
    setChecked(event.target.checked);
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
            value={name}
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
            checked={checked}
            onChange={handleChecked}
          />
          <label for="newsletter">S'inscrire à notre newsletter</label>
        </div>
        <p>
          En m'inscrivant je confirme avoir lu et accepté les Termes &
          Conditions et Politique de Confidentialité de Vinted. Je confirme
          avoir au moins 18 ans.
        </p>
        <button onclick={() => {}}>S'inscrire</button>
        {Cookies.get("userName") !== "" && (
          <p>Ce nom d'utilisateur est déjà utilisé</p>
        )}
        <Link to="/login">
          <p>Tu as déjà un compte ? Connecte-toi !</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
