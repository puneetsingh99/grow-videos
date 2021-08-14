import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { useUser } from "../user-context/UserProvider";
import { filterVideos } from "./utils/filterVideos";
import { filterBySearchKeywords } from "./utils/filterBySearchKeywords";
import { getAllVideos } from "./utils/getAllVideos";

const VideoContext = createContext();

const allVideosInitialState = {
  status: "idle",
  videoList: null,
  error: null,
};

export const VideoProvider = ({ children }) => {
  const [currPlaylist, setCurrPlaylist] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [allVideos, setAllVideos] = useState(allVideosInitialState);
  const { user } = useUser();

  useEffect(() => {
    (async function () {
      setAllVideos((currState) => ({ ...currState, status: "loading" }));

      const response = await getAllVideos(setAllVideos);

      if (response.videoList) {
        const { videoList } = response;
        return setAllVideos({ status: "succeeded", videoList, error: null });
      }

      return setAllVideos((currState) => ({
        ...currState,
        status: "error",
        error: error?.message,
      }));
    })();
  }, []);

  const filteredVideos = filterBySearchKeywords(
    filterVideos(allVideos.videoList, currPlaylist, user),
    searchKeyword
  );

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
