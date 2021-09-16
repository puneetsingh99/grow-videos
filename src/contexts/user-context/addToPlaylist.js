import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toastConfig";

export const addToPlaylist = (playlists, playlistName, videoId) => {
  const playlist = playlists.find(
    (playlist) => playlist.playlistName === playlistName
  );

  const videoAlreadyExists = playlist.videos.find((video) => video === videoId);
  if (videoAlreadyExists) {
    toast.error("Video already exists in the playlist", toastConfig);
    return playlists;
  }

  return playlists.map((playlist) =>
    playlist.playlistName === playlistName
      ? { ...playlist, videos: [videoId, ...playlist.videos] }
      : playlist
  );
};
