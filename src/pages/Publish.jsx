import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const Publish = () => {
  const [picture, setPicture] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [exchange, setExchange] = useState(false);
  const [preview, setPreview] = useState(null);

  const navigate = useNavigate();

  const userToken = Cookies.get("token");

  const handlePicture = event => {
    setPicture(event.target.files[0]);
    const objectUrl = URL.createObjectURL(event.target.files[0]);
    setPreview(objectUrl);
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
            formData.append("picture", picture);

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
            for (var pair of formData.entries()) {
              console.log(pair[0] + ", " + pair[1]);
            }
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

              console.log(response.data);
              alert("Votre article a été publié"); //vérifier
              navigate("/");
            } catch (err) {
              if (err.response.status === 500) {
                console.error("An error occurred");
              } else {
                console.error(err.response.data.msg);
              }
            }
          }}
        >
          <h1>Vends ton article</h1>
          <div className="box">
            <label htmlFor="picture" id="picture-label">
              + Ajouter une photo
            </label>

            <input type="file" id="picture" onChange={handlePicture} />
            {preview && (
              <img src={preview} alt="prévisualisation avant l'upload" /> // faire une adaptation css pour la taille de l'image
            )}
          </div>
          <div className="box">
            <div className="text-input">
              <label htmlFor="form-title">Titre</label>
              <input
                type="text"
                id="form-title"
                placeholder="ex : Chemise Sézanne verte"
                onChange={handleTitle}
                value={title}
              />
            </div>
            <div className="text-input">
              <label htmlFor="description">Décris ton article</label>
              <input
                type="text"
                id="description"
                placeholder="ex : portée quelquesfois, taille correctement"
                onChange={handleDescription}
                value={description}
              />
            </div>
          </div>
          <div className="box">
            <div className="text-input">
              <label htmlFor="brand">Marque :</label>
              <input
                type="text"
                id="brand"
                placeholder="ex : Zara"
                onChange={handleBrand}
                value={brand}
              />
            </div>
            <div className="text-input">
              <label htmlFor="size">Taille :</label>
              <input
                type="text"
                id="size"
                placeholder="ex: L/42"
                onChange={handleSize}
                value={size}
              />
            </div>
            <div className="text-input">
              <label htmlFor="condition">Etat :</label>
              <input
                type="text"
                id="condition"
                placeholder="ex : Neuf avec étiquette"
                onChange={handleCondition}
                value={condition}
              />
            </div>
            <div className="text-input">
              <label htmlFor="color">Couleur :</label>
              <input
                type="text"
                id="color"
                placeholder="ex : Vert"
                onChange={handleColor}
                value={color}
              />
            </div>
            <div className="text-input">
              <label htmlFor="city">Lieu :</label>
              <input
                type="text"
                id="city"
                placeholder="ex : Paris"
                onChange={handleCity}
                value={city}
              />
            </div>
          </div>
          <div className="box">
            <div className="text-input">
              <label htmlFor="price">Prix :</label>
              <input
                type="text"
                id="price"
                placeholder="ex : 30"
                onChange={handlePrice}
                value={price}
              />
            </div>
            <div>
              <input
                type="checkbox"
                id="exchange"
                name="exchange"
                checked={exchange}
                onChange={handleExchange}
              />
              <label htmlFor="exchange">
                Je suis intéressé.e pour les échanges
              </label>
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
