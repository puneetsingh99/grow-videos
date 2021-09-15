import React, { createContext, useContext, useState } from "react";
import { setupAuthHeaders } from "../../utils/setupAuthHeaders";
import axios from "axios";
import { API_LOGIN, API_SIGNUP } from "../../utils/api";
import { useLocalStorage } from "../../hooks";

const initialLoginStatus = {
  isUserLoggedIn: false,
  token: null,
  userId: null,
};

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [storedLoginStatus, setStoredLoginStatus] = useLocalStorage(
    "videoLibraryLogin",
    initialLoginStatus
  );

  const [isUserLoggedIn, setLogin] = useState(
    () => storedLoginStatus.isUserLoggedIn
  );

  const [tokenAndUserId, setTokenAndUserId] = useState(() => ({
    token: storedLoginStatus.token,
    userId: storedLoginStatus.userId,
  }));

  const { token, userId } = tokenAndUserId;

  setupAuthHeaders(token);

  function loginUser(user) {
    const { token, userId } = user;
    setLogin(true);
    setTokenAndUserId(() => ({ token, userId }));
    setStoredLoginStatus({ isUserLoggedIn: true, token, userId });
  }

  function logout() {
    localStorage.removeItem("videoLibraryLogin");
    setLogin(false);
    setTokenAndUserId(() => ({ token: null, userId: null }));
  }

  const loginUserWithCredentials = async (email, password) => {
    try {
      const response = await axios.post(API_LOGIN, { email, password });

      if (response.data.success) {
        loginUser(response?.data.user);
      }
      return response.data;
    } catch (error) {
      console.log(error.message);
      return {
        success: false,
        message: error.message,
        errorMessage: "Something went wrong",
      };
    }
  };

  const signupUser = async (name, email, password) => {
    try {
      const response = await axios.post(API_SIGNUP, {
        name,
        email,
        password,
      });

      if (response.data.success) {
        loginUser(response?.data.user);
      }
      return response.data;
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Could not Signup",
        errorMessage: "Something went wrong",
      };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isUserLoggedIn,
        loginUserWithCredentials,
        logout,
        token,
        userId,
        signupUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
