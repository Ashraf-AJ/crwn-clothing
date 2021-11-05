import { api, registrationPath, loginPath, logoutPath } from "./paths";
const post =
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
    return response.json();
  };

export const registerUser = post(`${api}${registrationPath}`);

export const login = post(`${api}${loginPath}`);

export const logout = (setCurrentUser) => {
  fetch(`${api}${logoutPath}`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  setCurrentUser(null);
};
