import { createContext, useContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import { userReducer } from "./userReducer";

const UserContext = createContext();

const initialState = {
  name: "",
  playlists: [
    {
      id: uuidv4(),
      playlistName: "My Playlist",
      videos: []
    }
  ]
};

export const UserProvider = ({ children }) => {
  const [user, userDispatch] = useReducer(userReducer, initialState);
  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
