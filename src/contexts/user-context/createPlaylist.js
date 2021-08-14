import { v4 as uuidv4 } from "uuid";

export const createPlaylist = (playlists, playlistName) => {
  return [
    {
      id: uuidv4(),
      playlistName: playlistName.trim(),
      videos: []
    },
    ...playlists
  ];
};
