import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../components/CheckoutForm";

// Cette ligne permet de vous connecter à votre compte Stripe en fournissant votre clef publique
const stripePromise = loadStripe(
  "pk_test_51S2unjDJJIjYF8yBz1i3nsNLQ6bY8XyXnNoU2buwTFvPoJTPnW9t8RkJZKSiG5tZIKR3dA0l8H7ql5rfm2h0SNef00A4OqYJJR"
);

const Payment = () => {
  const location = useLocation();
  const { title, amount } = location.state;

  const options = {
    // Type de transaction
    mode: "payment",
    // Montant de la transaction
    amount: amount * 100,
    // Devise de la transaction
    currency: "eur",
    // On peut customiser l'apparence ici
    appearance: {
      /*...*/
    },
  };
  return (
    <>
      <span>{title}</span>
      <span>{amount}€</span>

      {/* // Le composant Elements doit contenir toute notre logique de paiement //
      On lui donner la preuve que nous sommes connectés et les options de
      paiement */}
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm title={title} amount={amount} />
      </Elements>
    </>
  );
};

export default Payment;
