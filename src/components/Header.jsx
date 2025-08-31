import logo from "../assets/img/logo-vinted.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ setLog, setSearch, search }) => {
  let token = Cookies.get("token");

  const handleSearchChange = event => {
    const value = event.target.value;
    setSearch(value);
  };
  const handleCheckboxChange = {};
  const handleRangeChange = {};

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="logo-vinted" />
        </Link>{" "}
        <div className="filters">
          <div>
            <input
              type="search"
              id="search"
              name="search"
              placeholder="Recherche des articles"
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          {/* <div className="filter-price">
            <div className="checkbox">
              <span>Trier par prix : </span>
              <label>Croissant</label>
              <input
                type="checkbox"
                id="price-asc"
                name="price-asc"
                value={filter}
                onChange={handleCheckboxChange}
              />
              <label>Décroissant</label>
              <input
                type="checkbox"
                id="price-desc"
                name="price-desc"
                value={filter}
                onChange={handleCheckboxChange}
              />
            </div>
            <div className="range">
              <input
                type="range"
                id="price"
                name="price"
                min="0"
                max="500"
                step="5"
                value={filter}
                onChange={handleRangeChange}
              />
            </div>
          </div> */}
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
