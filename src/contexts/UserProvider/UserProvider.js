import { createContext, useContext, useReducer, useEffect } from "react";
import { userReducer } from "./userReducer";
import { getUser } from "./getUser";

const UserContext = createContext();

const initialState = {
  name: "",
  email: "",
  playlists: [],
};

export const UserProvider = ({ children }) => {
  const [user, userDispatch] = useReducer(userReducer, initialState);
  console.log(user);
  useEffect(() => getUser(userDispatch), []);
  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
