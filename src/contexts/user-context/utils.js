export const createPlaylistStates = {
  pending: "Creating playlist",
  success: "Playlist created",
  error: "Could not create Playlist",
};

export const removePlaylistStates = {
  pending: "Removing playlist",
  success: "Playlist removed",
  error: "Could not remove Playlist",
};

export const addToPlaylistStates = {
  pending: "Adding to playlist",
  success: "Video added to playlist",
  error: "Could not add to playlist",
};

export const removeFromPlaylistStates = {
  pending: "Removing from playlist",
  success: "Video removed from playlist",
  error: "Could not remove from playlist",
};

const protectedPlaylists = ["liked videos", "watch later", "watch history"];

export const isSafePlaylist = (playlistName) =>
  !protectedPlaylists.includes(playlistName.trim().toLowerCase());
