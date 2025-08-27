import logo from "../assets/logo-vinted.png";

const Header = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="logo-vinted" />
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
