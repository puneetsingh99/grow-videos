import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState,
} from "react";
import { userReducer } from "./userReducer";
import { getUser } from "./getUser";
import { useAuth } from "../auth-context/AuthProvider";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toastConfig";

import { apiGetUser } from "../../utils/api";

import axios from "axios";
import {
  createPlaylistStates,
  isSafePlaylist,
  addToPlaylistStates,
  removeFromPlaylistStates,
  removePlaylistStates,
} from "./utils";

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

  const [playlistStatus, setPlaylistStatus] = useState("idle");

  const createPlaylist = async (playlistName) => {
    try {
      if (!playlistName) {
        return toast.error("Playlist name cannot be empty", toastConfig);
      }

      if (!isSafePlaylist(playlistName)) {
        return toast.error(
          "Protected playlist name. Please use another name",
          toastConfig
        );
      }

      setPlaylistStatus("loading");
      const response = await toast.promise(
        axios.post(apiGetUser(userId), {
          operation: "createPlaylist",
          playlistName,
        }),
        createPlaylistStates,
        toastConfig
      );

      if (response.data.updatedUser) {
        setPlaylistStatus("succeeded");
        return userDispatch({
          type: "CREATE_PLAYLIST",
          payload: { playlistName },
        });
      }

      return toast.error("Something went wrong", toastConfig);
    } catch (error) {
      console.error(error.message);
      return toast.error(error.message, toastConfig);
    }
  };

  const removePlaylist = async (playlistName) => {
    try {
      if (!playlistName) {
        return toast.error("Playlist name cannot be empty", toastConfig);
      }
      setPlaylistStatus("loading");
      const response = await toast.promise(
        axios.post(apiGetUser(userId), {
          operation: "removePlaylist",
          playlistName,
        }),
        removePlaylistStates,
        toastConfig
      );

      if (response.data.updatedUser) {
        setPlaylistStatus("succeeded");
        return userDispatch({
          type: "REMOVE_PLAYLIST",
          payload: { playlistName },
        });
      }

      return toast.error("Something went wrong", toastConfig);
    } catch (error) {
      console.error(error.message);
      return toast.error(error.message, toastConfig);
    }
  };

  const addToPlaylist = async (playlistName, videoId) => {
    try {
      if (!playlistName && !videoId) {
        return toast.error(
          "Please select proper playlist and video",
          toastConfig
        );
      }

      if (
        !["watch later", "watch history", "liked videos"].includes(
          playlistName.trim().toLowerCase()
        )
      ) {
        await toast.promise(
          axios.post(apiGetUser(userId), {
            operation: "addToPlaylist",
            playlistName,
            videoId,
          }),
          addToPlaylistStates,
          toastConfig
        );
      } else {
        await axios.post(apiGetUser(userId), {
          operation: "addToPlaylist",
          playlistName,
          videoId,
        });
      }

      playlistName === "liked videos" &&
        toast.success("Video liked", toastConfig);

      playlistName === "watch later" &&
        toast.success("Added to watch later", toastConfig);
    } catch (error) {
      console.log(error);
      console.error(error?.response?.data);
      toast.error(error?.response?.data?.message, toastConfig);
    }
  };

  const removeFromPlaylist = async (playlistName, videoId) => {
    try {
      if (!playlistName && !videoId) {
        return toast.error(
          "Please select proper playlist and video",
          toastConfig
        );
      }

      userDispatch({
        type: "REMOVE_FROM_PLAYLIST",
        payload: { playlistName, videoId },
      });

      if (
        !["watch later", "watch history", "liked videos"].includes(
          playlistName.trim().toLowerCase()
        )
      ) {
        await toast.promise(
          axios.post(apiGetUser(userId), {
            operation: "removeFromPlaylist",
            playlistName,
            videoId,
          }),
          removeFromPlaylistStates,
          toastConfig
        );
      } else {
        await axios.post(apiGetUser(userId), {
          operation: "removeFromPlaylist",
          playlistName,
          videoId,
        });
      }

      playlistName === "liked videos" &&
        toast.success("Video unliked", toastConfig);

      playlistName === "watch later" &&
        toast.success("Removed from watch later", toastConfig);
    } catch (error) {
      console.error(error.message);
      return toast.error(error.message, toastConfig);
    }
  };

  const getPlaylists = async () => {
    try {
      const response = await getUser(userId);
      return response.user.playlists;
    } catch (error) {
      console.error(error.message);
      toast.error(error.message, toastConfig);
    }
  };

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
    <UserContext.Provider
      value={{
        user,
        userDispatch,
        createPlaylist,
        removePlaylist,
        addToPlaylist,
        removeFromPlaylist,
        getPlaylists,
        playlistStatus,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
