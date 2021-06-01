import { Route, Navigate, useParams } from "react-router-dom";
import { useAuth } from "../../contexts";

export const PrivateRoute = ({ path, ...props }) => {
  const { isUserLoggedIn } = useAuth();
  return isUserLoggedIn ? (
    <Route {...props} path={path} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
