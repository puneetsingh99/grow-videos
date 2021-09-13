import { createContext, useContext, useReducer, useEffect } from "react";
import { userReducer } from "./userReducer";
import { getUser } from "./getUser";
import { useAuth } from "../auth-context/AuthProvider";

const UserContext = createContext();

const initialState = {
  name: "",
  playlists: [],
};

export const UserProvider = ({ children }) => {
  const { userId } = useAuth();
  const [user, userDispatch] = useReducer(userReducer, initialState);

  useEffect(() => {
    (async function () {
      const response = await getUser(userId);

      if (response.user) {
        return userDispatch({ type: "SET_USER", payload: response.user });
      }
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
