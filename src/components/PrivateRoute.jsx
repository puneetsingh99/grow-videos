import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { checkTokenExpiry } from "../utils/checkTokenExpiry";
import { useAuth } from "../contexts";

export const PrivateRoute = ({ path, element, ...props }) => {
  const location = useLocation();
  const { isUserLoggedIn, logout } = useAuth();
  let loginUser = !isUserLoggedIn;

  if (isUserLoggedIn) {
    const loginObject = localStorage.getItem("videoLibraryLogin");

    if (loginObject) {
      const token = JSON.parse(loginObject).token;
      const expiryTime = checkTokenExpiry(token);
      const isTokenExpired = Date.now() >= expiryTime * 1000;

      if (isTokenExpired) {
        loginUser = true;
        logout();
      }
    } else {
      console.log("Login object not found in the localStorage");
    }
  }

  return loginUser ? (
    <Navigate state={{ from: location.pathname }} replace to="/login" />
  ) : (
    <Route {...props} path={path} element={element} />
  );
};
