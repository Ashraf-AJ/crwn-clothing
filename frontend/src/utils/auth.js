import { api, registrationPath, loginPath, logoutPath } from "./paths";
import { httpPost } from "./utils";

export const registerUser = httpPost(`${api}${registrationPath}`);

export const login = httpPost(`${api}${loginPath}`);

export const logout = (setCurrentUser) => {
  httpPost(`${api}${logoutPath}`)();

  setCurrentUser(null);
};
