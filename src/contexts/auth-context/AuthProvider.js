import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const loginUserWithCredentials = (email, password) => {
    if (email === "puneet@gmail.com" && password === "puneet") {
      console.log("password matches");
      setIsUserLoggedIn(true);
      navigate(state?.from ? state.from : "/");
    }
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, loginUserWithCredentials }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
