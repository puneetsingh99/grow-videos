import { createContext, useContext, useState } from "react";
// import { existingPlaylist } from "../../data/playlist.data";

const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  return (
    <PlaylistContext.Provider value={{ name: "Puneet" }}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylist = () => {
  return useContext(PlaylistContext);
};
