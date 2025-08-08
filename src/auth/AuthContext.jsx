import { createContext, useContext, useMemo, useState } from "react";
import { getToken as readToken, setToken as persistToken, clearToken } from "./token";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setTokenState] = useState(() => readToken());

  const login = (newToken) => {
    persistToken(newToken);
    setTokenState(newToken);
  };

  const logout = () => {
    clearToken();
    setTokenState(null);
  };

  const value = useMemo(
    () => ({
      token,
      setToken: setTokenState,
      login,
      logout,
      isAuthenticated: Boolean(token),
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export default AuthContext;