import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // appel à l'API pour récupérer les données via axios
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <div className="wrapper">
      {data.product_pictures.map((element, index) => {
        return (
          <div key={index} className="photo-article">
            <img src={element.secure_url} alt="photo-article" />
          </div>
        );
      })}
      <div className="details-article">
        <div>
          <div className="price">{data.product_price} €</div>
          {data.product_details.map((element, index) => {
            return (
              <div className="infos" key={index}>
                <div>{element.MARQUE}</div>
                {element.TAILLE && <div className="size">{element.TAILLE}</div>}
                <div>{element.ÉTAT}</div>
                <div>{element.COULEUR}</div>
                <div>{element.EMPLACEMENT}</div>
              </div>
            );
          })}
        </div>
        <div>
          <div>{data.product_name}</div>
          <div>{data.product_description}</div>
          <div className="owner">
            {data.owner.account.avatar && (
              <div className="owner-avatar">
                <img src={data.owner.account.avatar.secure_url} />
              </div>
            )}
            <div>{data.owner.account.username}</div>
          </div>
        </div>
        <button>Acheter</button>
      </div>
    </div>
  );
};

export default Offer;
