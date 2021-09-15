import { createContext, useContext, useReducer, useEffect } from "react";
import { userReducer } from "./userReducer";
import { getUser } from "./getUser";
import { useAuth } from "../auth-context/AuthProvider";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toastConfig";

const UserContext = createContext();

const initialState = {
  status: "idle",
  name: "",
  playlists: [],
  error: null,
};

export const UserProvider = ({ children }) => {
  const { userId, isUserLoggedIn } = useAuth();
  const [user, userDispatch] = useReducer(userReducer, initialState);
  console.log(user);

  useEffect(() => {
    (async function () {
      if (isUserLoggedIn) {
        userDispatch({ type: "SET_STATUS", payload: "loading" });
        try {
          const response = await getUser(userId);
          if (response.user) {
            userDispatch({ type: "SET_STATUS", payload: "success" });
            return userDispatch({ type: "SET_USER", payload: response.user });
          }
        } catch (error) {
          console.error(error.message);
          toast.error(error.message, toastConfig);
        }
      }
    })();
  }, [isUserLoggedIn, userId]);

  return (
    <UserContext.Provider value={{ user, userDispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
