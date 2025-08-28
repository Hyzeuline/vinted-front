import logo from "../assets/logo-vinted.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = () => {
  const existToken = Cookies.get("token");
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo-vinted" />
        </Link>{" "}
        <input placeholder="Recherche des articles" type="text" />
        <div className="header-button">
          <div className="inscription-connexion">
            <Link to="/signup">
              {existToken ? <div></div> : <button>S'inscrire</button>}
            </Link>
            <Link to="/login">
              {existToken ? (
                <button>Se déconnecter</button>
              ) : (
                <button>Se connecter</button>
              )}
            </Link>
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
