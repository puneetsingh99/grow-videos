import { createContext, useContext, useEffect } from "react";
import { videoList } from "../../data/videos.data";
import { useState } from "react";
import { useUser } from "../UserProvider/UserProvider";
import { filterVideosByCategoryAndPlaylist } from "./filterVideos";
import { filterBySearchKeywords } from "./filterBySearchKeywords";
import { getAllVideos } from "./getAllVideos";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [currPlaylist, setCurrPlaylist] = useState("All");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [allVideos, setAllVideos] = useState("");
  const { user } = useUser();

  useEffect(() => getAllVideos(setAllVideos), []);

  const filteredVideos = filterBySearchKeywords(
    filterVideosByCategoryAndPlaylist(allVideos.videoList, currPlaylist, user),
    searchKeyword
  );

  return (
    <VideoContext.Provider
      value={{
        filteredVideos,
        allVideos: allVideos.videoList,
        setCurrPlaylist,
        currPlaylist,
        searchKeyword,
        setSearchKeyword
      }}
    >
      {children}
    </VideoContext.Provider>
  );
};

export const useVideos = () => {
  return useContext(VideoContext);
};
