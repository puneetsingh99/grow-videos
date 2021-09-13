import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useUser } from "../user-context/UserProvider";
import { filterVideos } from "./utils/filterVideos";
import { getAllVideos } from "./utils/getAllVideos";

const VideoContext = createContext();

const allVideosInitialState = {
  status: "idle",
  videoList: null,
  error: null,
};

export const VideoProvider = ({ children }) => {
  const [currPlaylist, setCurrPlaylist] = useState("Home");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [allVideos, setAllVideos] = useState(allVideosInitialState);
  const { user } = useUser();

  useEffect(() => {
    (async function () {
      setAllVideos((currState) => ({ ...currState, status: "loading" }));
      const response = await getAllVideos(setAllVideos);

      if (response.videoList) {
        const { videoList } = response;
        console.log(videoList);
        return setAllVideos({ status: "succeeded", videoList, error: null });
      }

      return setAllVideos((currState) => ({
        ...currState,
        status: "error",
        error: response?.message,
      }));
    })();
  }, []);

  const filteredVideos = filterVideos(allVideos.videoList, currPlaylist, user);

  const providerValues = {
    filteredVideos,
    allVideos,
    setCurrPlaylist,
    currPlaylist,
    searchKeyword,
    setSearchKeyword,
  };

  return (
    <VideoContext.Provider value={providerValues}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => {
  return useContext(VideoContext);
};
