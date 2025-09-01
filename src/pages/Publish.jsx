import { useState } from "react";
import axios from "axios";

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
  const userToken = Cookies.get("token");

  return (
    <section>
      <div className="container">
        <form
          onSubmit={async event => {
            event.preventDefault();

            const formData = new FormData();
            formData.append("title", title);
            formData.append("descrition", description);
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
          <div>
            <label htmlFor="picture">+ Ajoute une photo</label>
            <input
              type="file"
              id="picture"
              onChange={event => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
          <div>
            <label>Titre</label>
            <input
              type="text"
              placeholder="ex:Chemise Sézanne verte"
              onChange={event => {
                setTitle(event.target.value);
              }}
              value={title}
            />
          </div>
          <div>
            <label>Décris ton article</label>
            <input
              placeholder="ex:portée quelquesfois, taille correctement"
              type="text"
              onChange={event => {
                setDescription(event.target.value);
              }}
              value={description}
            />
          </div>
          <div>
            <label>Marque :</label>
            <input
              type="text"
              placeholder="ex:Zara"
              onChange={event => {
                setBrand(event.target.value);
              }}
              value={brand}
            />
          </div>
          <div>
            <label>Taille :</label>
            <input
              type="text"
              onChange={event => {
                setSize(event.target.value);
              }}
              value={size}
            />
          </div>
          <div>
            <label>Etat :</label>
            <input
              type="text"
              onChange={event => {
                setCondition(event.target.value);
              }}
              value={condition}
            />
          </div>
          <div>
            <label>Couleur :</label>
            <input
              type="text"
              onChange={event => {
                setColor(event.target.value);
              }}
              value={color}
            />
          </div>
          <div>
            <label>Lieu :</label>
            <input
              type="text"
              onChange={event => {
                setCity(event.target.value);
              }}
              value={city}
            />
          </div>
          <div>
            <label>Prix :</label>
            <input
              type="text"
              onChange={event => {
                setPrice(event.target.value);
              }}
              value={price}
            />
          </div>
          <div>
            <input type="checkbox" id="exchange" name="exchange" checked />
            <label>Je suis intéressé.e pour les échanges</label>
          </div>
          <button>Ajouter</button>
        </form>
      </div>
    </section>
  );
};

export default Publish;
