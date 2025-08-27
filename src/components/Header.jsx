import logo from "../assets/logo-vinted.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo-vinted" />
        </Link>{" "}
        <input></input>
        <div className="header-button">
          <div className="inscription-connexion">
            <button>S'inscrire</button>
            <button>Se connecter</button>
          </div>
          <div className="publish-article">
            <button>Vends tes articles</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
