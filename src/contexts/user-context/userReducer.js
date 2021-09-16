import { createPlaylist } from "./createPlaylist";
import { addToPlaylist } from "./addToPlaylist";
import { removeFromPlaylist } from "./removeFromPlaylist";

export const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      const { name, playlists } = action.payload;
      return { ...state, name, playlists };

    case "CREATE_PLAYLIST":
      const { playlistName } = action.payload;

      if (playlistName.length === 0) {
        console.log("playlist name cannot be empty");
        return state;
      }
      if (
        state.playlists.find(
          (playlist) =>
            playlist.playlistName.toLowerCase() === playlistName.toLowerCase()
        )
      ) {
        console.log("playlist already exists");
        return state;
      }
      return {
        ...state,
        playlists: createPlaylist(state.playlists, playlistName),
      };

    case "REMOVE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.filter(
          (playlist) => playlist.playlistName !== action.payload.playlistName
        ),
      };

    case "ADD_TO_PLAYLIST":
      return {
        ...state,
        playlists: addToPlaylist(
          state.playlists,
          action.payload.playlistName,
          action.payload.video
        ),
      };
    case "REMOVE_FROM_PLAYLIST":
      return {
        ...state,
        playlists: removeFromPlaylist(
          state.playlists,
          action.payload.playlistName,
          action.payload.videoId
        ),
      };

    case "SET_STATUS":
      return { ...state, status: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
