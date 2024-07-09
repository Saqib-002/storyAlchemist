"use client";
import { getActiveSubscription } from "@/lib/actions/subscription.action";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
type props = {
  priceId: string;
  userId: string;
};
const SubscribeComponent = ({ priceId, userId }: props) => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    async function getSubscription() {
      const subscription = await getActiveSubscription({
        user: userId,
        priceId,
      });
      const parsedSubscription = JSON.parse(subscription);
      if (parsedSubscription.length !== 0) {
        setIsSubscribed(true);
      }
    }
    getSubscription();
  }, []);
  const handleSubmit = async () => {
    if (!userId) {
      router.push("/sign-in");
      return;
    }
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
    <button
      disabled={isSubscribed}
      className="mt-auto flex w-full items-center rounded border-0 bg-gradient-to-r from-cyan-600 to-blue-500 px-4 py-2 text-white hover:bg-indigo-600 focus:outline-none"
      onClick={handleSubmit}
    >
      <p className={`${isSubscribed ? "w-full text-center" : ""}`}>
        Subscribe{isSubscribed ? "d" : ""}
      </p>

      {isSubscribed ? (
        ""
      ) : (
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="ml-auto size-4"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      )}
    </button>
  );
};
export default SubscribeComponent;
