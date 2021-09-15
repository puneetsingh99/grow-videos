export const addToPlaylist = (playlists, playlistName, videoId) => {
  const playlist = playlists.find(
    (playlist) => playlist.playlistName === playlistName
  );

  const videoAlreadyExists = playlist.videos.find((video) => video === videoId);
  if (videoAlreadyExists) {
    console.log("The video already exists in the playlist");
    return playlists;
  }

  return playlists.map((playlist) =>
    playlist.playlistName === playlistName
      ? { ...playlist, videos: [videoId, ...playlist.videos] }
      : playlist
  );
};
