import { useParams } from "react-router-dom";

const Offer = () => {
  const params = useParams();
  console.log("params =>", params); // { id : 2345678 }
  return <div>Bienvenue sur la page présentant le produit : {params.id}</div>;
};

export default Offer;
