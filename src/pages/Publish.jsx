import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Publish = props => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, setExchange] = useState(false);

  const userToken = Cookies.get("token");

  const handleFile = event => {
    setFile(event.target.files[0]);
  };

  const handleTitle = event => {
    setTitle(event.target.value);
  };

  const handleDescription = event => {
    setDescription(event.target.value);
  };

  const handleBrand = event => {
    setBrand(event.target.value);
  };

  const handleSize = event => {
    setSize(event.target.value);
  };

  const handleCondition = event => {
    setCondition(event.target.value);
  };

  const handleColor = event => {
    setColor(event.target.value);
  };

  const handleCity = event => {
    setCity(event.target.value);
  };

  const handlePrice = event => {
    setPrice(event.target.value);
  };

  const handleExchange = event => {
    setExchange(event.target.checked);
  };

  return userToken ? (
    <section>
      <div className="container-publish">
        <h1>Vends ton article</h1>
        <form
          className="formulaire-publish"
          onSubmit={async event => {
            event.preventDefault();

            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("price", price);
            formData.append("brand", brand);
            formData.append("size", size);
            formData.append("condition", condition);
            formData.append("color", color);
            formData.append("city", city);
            formData.append("picture", file);

            //      product_name: req.body.title,
            // product_description: req.body.description,
            // product_price: req.body.price,
            // product_details: [
            //   {
            //     MARQUE: req.body.brand,
            //   },
            //   { TAILLE: req.body.size },
            //   { ÉTAT: req.body.condition },
            //   { COULEUR: req.body.color },
            //   { EMPLACEMENT: req.body.city },
            // ],
            // owner: req.user,

            try {
              let url = import.meta.env.VITE_API_URL
                ? `${import.meta.env.VITE_API_URL}offer/publish`
                : "https://site--vinted-backend--zvc5szvjvznr.code.run/offer/publish";

              const response = await axios.post(url, formData, {
                headers: {
                  Authorization: "Bearer " + userToken,
                  "Content-Type": "multipart/form-data",
                },
              });

              alert(JSON.stringify(response.data));
            } catch (err) {
              if (err.response.status === 500) {
                console.error("An error occurred");
              } else {
                console.error(err.response.data.msg);
              }
            }
          }}
        >
          <div className="box">
            <label htmlFor="picture">+ Ajoute une photo</label>
            <input type="file" id="picture" onChange={handleFile} />
          </div>
          <div className="box">
            <div>
              <label>Titre</label>
              <input
                type="text"
                placeholder="ex:Chemise Sézanne verte"
                onChange={handleTitle}
                value={title}
              />
            </div>
            <div>
              <label>Décris ton article</label>
              <input
                placeholder="ex:portée quelquesfois, taille correctement"
                type="text"
                onChange={handleDescription}
                value={description}
              />
            </div>
          </div>
          <div className="box">
            <div>
              <label>Marque :</label>
              <input
                type="text"
                placeholder="ex:Zara"
                onChange={handleBrand}
                value={brand}
              />
            </div>
            <div>
              <label>Taille :</label>
              <input type="text" onChange={handleSize} value={size} />
            </div>
            <div>
              <label>Etat :</label>
              <input type="text" onChange={handleCondition} value={condition} />
            </div>
            <div>
              <label>Couleur :</label>
              <input type="text" onChange={handleColor} value={color} />
            </div>
            <div>
              <label>Lieu :</label>
              <input type="text" onChange={handleCity} value={city} />
            </div>
          </div>
          <div className="box">
            <div>
              <label>Prix :</label>
              <input type="text" onChange={handlePrice} value={price} />
            </div>
            <div>
              <input
                type="checkbox"
                id="exchange"
                name="exchange"
                checked={exchange}
                onChange={handleExchange}
              />
              <label>Je suis intéressé.e pour les échanges</label>
            </div>
          </div>
          <button className="publish-form ">Ajouter</button>
        </form>
      </div>
    </section>
  ) : (
    <Navigate to="/signup" />
  );
};

export default Publish;
