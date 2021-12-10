import { loadStripe } from "@stripe/stripe-js";
import { api, publishableKey } from "./paths";

export const httpPost =
  (url) =>
  async (data = {}) => {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response;
  };

export const httpGet = async (url) => {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });
  return response;
};

export const loadStripeObj = async () => {
  const response = await httpGet(`${api}${publishableKey}`);
  const pubKey = await response.json();
  loadStripe(pubKey);
};
