import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = ({ search, priceSort, priceRange }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = import.meta.env.VITE_API_URL
          ? `${import.meta.env.VITE_API_URL}offers`
          : "https://site--vinted-backend--zvc5szvjvznr.code.run/offers";
        const params = [];

        if (search) {
          params.push(`title=${encodeURIComponent(search)}`);
        }

        if (priceSort) {
          params.push(`sort=price-${priceSort}`);
        }

        if (priceRange && priceRange.length === 2) {
          if (priceRange[0] > 0) {
            params.push(`priceMin=${priceRange[0]}`);
          }
          if (priceRange[1] < 500) {
            params.push(`priceMax=${priceRange[1]}`);
          }
        }

        if (params.length > 0) {
          url += `?${params.join("&")}`;
        }

        console.log("🔎 Requête envoyée :", url);

        const response = await axios.get(url);
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [search, priceSort, priceRange]);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <main>
      {data.offers.map((element, index) => {
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
              <Link to={`/offer/${element._id}`}>
                <img
                  src={element.product_image.secure_url}
                  alt={element.product_name}
                />
              </Link>
            </div>
            <div className="price-article">{element.product_price} €</div>
            {element.product_details[1]?.TAILLE && (
              <div className="size">{element.product_details[1].TAILLE}</div>
            )}
            {element.product_details[0]?.MARQUE && (
              <div className="brand">{element.product_details[0].MARQUE}</div>
            )}
          </article>
        );
      })}
    </main>
  );
};

export default Home;
