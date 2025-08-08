import Cookies from "js-cookie";

const LOCAL_STORAGE_KEY = "token";
const COOKIE_KEY = "jwt";

export const getToken = () => {
  if (typeof window === "undefined") return null;
  return (
    window.localStorage.getItem(LOCAL_STORAGE_KEY) ||
    Cookies.get(COOKIE_KEY) ||
    null
  );
};

export const setToken = (token, options = {}) => {
  if (typeof window === "undefined") return;
  const { days = 7 } = options;
  window.localStorage.setItem(LOCAL_STORAGE_KEY, token);
  Cookies.set(COOKIE_KEY, token, { expires: days });
};

export const clearToken = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(LOCAL_STORAGE_KEY);
  Cookies.remove(COOKIE_KEY);
};