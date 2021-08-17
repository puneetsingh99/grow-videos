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
  console.log(userId);
  const [user, userDispatch] = useReducer(userReducer, initialState);
  console.log(user);

  useEffect(() => {
    (async function () {
      const response = await getUser(userId);

      if (response.user) {
        const { user } = response;
        return userDispatch({ type: "SET_USER", payload: user });
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
