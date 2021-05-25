export const filterVideosByCategoryAndPlaylist = (
  allVideos,
  currPlaylist,
  user
) => {
  const predefinedPlaylists = [
    "Futures and Options",
    "All",
    "Investing",
    "Trading",
    "Commodities",
  ];

  if (currPlaylist === "" || currPlaylist === "All") {
    return allVideos;
  }

  if (predefinedPlaylists.includes(currPlaylist)) {
    return allVideos.filter((video) => video.category === currPlaylist);
  }
  console.log("final filter");

  const playlist = user.playlists.filter(
    (playlist) => playlist.playlistName === currPlaylist
  );

  if (playlist.length > 0) {
    const videosInPlaylist = playlist[0].videos;
    const filteredVideos = allVideos.filter((video) =>
      videosInPlaylist.includes(video._id)
    );

    return filteredVideos;
  }
  return allVideos;
};
