import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

//redirect to stripe payment
const useRedirectStripe = (sessionId: string) => {
  useEffect(
    function () {
      const getStripe = async function () {
        const stripePromise = loadStripe(import.meta.env.VITE_CLIENT_SECRET);
        const stripe = await stripePromise;
        stripe?.redirectToCheckout({
          sessionId: sessionId,
        });
      };
      getStripe();

      return () => {
        getStripe();
      };
    },

    [sessionId]
  );
};

export default useRedirectStripe;
