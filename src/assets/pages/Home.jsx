import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // appel à l'API pour récupérer les données via axios
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <main>
      <h1>Nous sommes sur la page Home</h1>
      {data.offers.map((element, index) => {
        // owner:{account: {…}, _id: '686d72faa42119e8be07e00e'}
        // product_date :"2025-07-22T17:33:21.508Z"
        // product_description: "aaa"
        // product_details:(5) [{…}, {…}, {…}, {…}, {…}]
        // product_image:{asset_id: '163eaee1375f2809a9c5304406576677', public_id: 'api/vinted-v2/offers/687fcb614771536e533988c8/preview', version: 1753205601, version_id: 'a091e64f7fc9c09367c0ac08ce09e332', signature: '233bfd4da443bfb43a8aef3f5c18b2617688269f', …}
        // product_name:"aaa"
        // product_pictures:[{…}]
        // product_price:100
        // __v : 0
        // _id:"687fcb614771536e533988c8"

        // console.log(element);
        console.log(element.product_pictures);
        return (
          <div key={index}>
            <div className="owner">{element.owner.account.username}</div>
            {/* {{element.owner.account.avatar} ? (<div className="owner-avatar">{element.owner.account.avatar}</div>)} */}
            <div className="image-article">
              <img src={element.product_pictures[url]} />
            </div>
            <div className="price-article">{element.product_price}</div>
          </div>
        );
      })}
    </main>
  );
};

export default Home;
