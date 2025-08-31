import logo from "../assets/img/logo-vinted.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Header = ({
  setLog,
  setSearch,
  search,
  priceSort,
  setPriceSort,
  priceRange,
  setPriceRange,
}) => {
  let token = Cookies.get("token");

  const handleSearchChange = event => {
    const value = event.target.value;
    setSearch(value);
  };

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
          <div className="filter-price">
            <div className="radio">
              <span>Trier par prix : </span>
              <div>
                <span>Croissant</span>
                <input
                  type="radio"
                  name="price-sort"
                  value="asc"
                  checked={priceSort === "asc"}
                  onChange={() => setPriceSort("asc")}
                />
              </div>
              <div>
                <span>Décroissant</span>
                <input
                  type="radio"
                  name="price-sort"
                  value="desc"
                  checked={priceSort === "desc"}
                  onChange={() => setPriceSort("desc")}
                />
              </div>
            </div>
            <Slider
              range
              min={0}
              max={500}
              step={5}
              value={priceRange}
              onChange={range => setPriceRange(range)}
            />
            <p>
              Prix min : {priceRange[0]}€ - Prix max : {priceRange[1]}€
            </p>
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
