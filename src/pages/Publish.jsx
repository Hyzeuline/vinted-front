import { useState } from "react";
import axios from "axios";

const Publish = props => {
  const [file, setFile] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [details, setDetails] = useState([]);
  const userToken = Cookies.get("token");

  return (
    <section>
      <div className="container">
        <form
          onSubmit={async event => {
            event.preventDefault();

            const formData = new FormData();
            formData.append("Titre", title);
            formData.append("Description", description);
            formData.append("Prix", price);
            formData.append("Détails", details);
            formData.append("Photos", file);

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
          <input
            type="text"
            onChange={event => {
              setTitle(event.target.value);
            }}
            value={title}
          />
          <input
            type="text"
            onChange={event => {
              setDescription(event.target.value);
            }}
            value={description}
          />
          <input
            type="text"
            onChange={event => {
              setPrice(event.target.value);
            }}
            value={price}
          />
          <label>MARQUE :</label>
          <input
            type="text"
            onChange={event => {
              setDetails(event.target.value);
            }}
            value={details.push()}
          />
          <input
            type="file"
            onChange={event => {
              setFile(event.target.files[0]);
            }}
          />
          <input type="submit" />
        </form>
      </div>
    </section>
  );
};

export default Publish;
