import { createContext, useState } from "react";
import { loginRequest, signUpRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);
  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((res) => {
        setUser(res);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError("Error: Passwords do not match");
      return;
    }
    setIsLoading(true);
    signUpRequest(email, password)
      .then((res) => {
        setUser(res);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        error,
        isAuthenticated,
        isLoading,
        onLogin,
        onRegister,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
