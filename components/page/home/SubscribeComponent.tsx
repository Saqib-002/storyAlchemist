"use client";
import { loadStripe } from "@stripe/stripe-js";
type props = {
  priceId: string;
  price: string;
  description: string;
  userId: string;
  subPackage: string;
};
const SubscribeComponent = ({ priceId, price, description, userId }: props) => {
  const handleSubmit = async () => {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
    );
    if (!stripe) {
      return;
    }
    try {
      const response = await fetch("/api/stripe/checkout", {
        method: "POST",
        body: JSON.stringify({ priceId, userId }),
      });
      const res = await response.json();
      if (!res.ok) throw new Error("Something went wrong");
      await stripe.redirectToCheckout({
        sessionId: res.result.id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      Click Below button to get {description}
      <button onClick={handleSubmit}>Upgrade in {price}</button>
    </div>
  );
};
export default SubscribeComponent;
