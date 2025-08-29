import logo from "../assets/logo-vinted.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ setLog }) => {
  let token = Cookies.get("token");
  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo-vinted" />
        </Link>{" "}
        <input placeholder="Rechercher des articles" type="text" />
        <div className="header-button">
          {token ? (
            <button
              onClick={() => {
                setLog(Cookies.remove("token"));
              }}
            >
              Déconnexion
            </button>
          ) : (
            <div className="inscription-connexion">
              <Link to="/signup">
                <button>S'inscrire</button>
              </Link>
              <Link to="/login">
                <button>Se connecter</button>
              </Link>
            </div>
          )}
          <div className="publish-article">
            <button>Vends tes articles</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
