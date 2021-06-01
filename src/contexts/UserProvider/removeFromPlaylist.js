export const removeFromPlaylist = (playlists, playlistName, videoId) => {
  return playlists.map((playlist) =>
    playlist.playlistName === playlistName
      ? {
          ...playlist,
          videos: playlist.videos.filter((video) => video !== videoId)
        }
      : playlist
  );
};
