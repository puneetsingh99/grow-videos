export const addRemoveVideoHandler = (
  isChecked,
  userDispatch,
  playlistName,
  videoId
) => {
  if (!isChecked) {
    userDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { playlistName, videoId },
    });
    return;
  }
  userDispatch({
    type: "REMOVE_FROM_PLAYLIST",
    payload: { playlistName, videoId },
  });
};
