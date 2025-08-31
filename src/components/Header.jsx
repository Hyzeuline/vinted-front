import logo from "../assets/img/logo-vinted.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ setLog, setFilter, filter }) => {
  let token = Cookies.get("token");

  const handleFilterChange = event => {
    const value = event.target.value;
    setFilter(value);
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo-vinted" />
        </Link>{" "}
        <div className="filter">
          <input
            placeholder="Recherche des articles"
            type="text"
            value={filter}
            onChange={handleFilterChange}
          />
          <div>
            <span>Trier par prix :</span>
            <span>Prix entre :</span>
          </div>
        </div>
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
