import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <main>
      {data.offers.map((element, index) => {
        console.log(element._id);

        return (
          <article key={index}>
            <div className="owner">
              {element.owner.account.avatar && (
                <div className="owner-avatar">
                  <img src={element.owner.account.avatar.secure_url} />
                </div>
              )}
              <div className="owner-name">{element.owner.account.username}</div>
            </div>
            <div className="image-article">
              <Link to={`/Offer/${element._id}`}>
                <img
                  src={element.product_pictures[0].secure_url}
                  alt={element.product_name}
                />
              </Link>
            </div>
            <div className="price-article">{element.product_price} €</div>
            {element.product_details[1].TAILLE && (
              <div className="size">{element.product_details[1].TAILLE}</div>
            )}
            {element.product_details[0].MARQUE && (
              <div className="brand">{element.product_details[0].MARQUE}</div>
            )}
          </article>
        );
      })}
    </main>
  );
};

export default Home;
