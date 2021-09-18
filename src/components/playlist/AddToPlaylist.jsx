import "./add-to-playlist.css";
import { SelectPlaylist } from "./SelectPlaylist";
import { addToPlaylistHandler } from "./addToPlaylistHandler";
import { useUser } from "../../contexts";
import { useState } from "react";
import { isSafePlaylist } from "../../contexts/user-context/utils";
import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toastConfig";

export const AddToPlaylist = ({ toggleModal, setToggle, videoId }) => {
  const { user, createPlaylist, playlistStatus } = useUser();
  const [playlistName, setPlaylistName] = useState("");

  const userPlaylists = user.playlists.filter((playlist) =>
    isSafePlaylist(playlist.playlistName)
  );

  const isVideoPresent = (playlistName, videoId) => {
    let videoExists;
    if (userPlaylists) {
      const playlistToSearch = userPlaylists.find(
        (playlist) => playlist.playlistName === playlistName
      );
      videoExists = playlistToSearch.videos.find(
        (video) => video.videoId === videoId
      );
    }
    return videoExists;
  };

  const isPlaylistPresent = (playlistName) => {
    return user.playlists.find(
      (playlist) =>
        playlist.playlistName.trim().toLowerCase() ===
        playlistName.trim().toLowerCase()
    );
  };

  return (
    <main
      className={`modal-container ${toggleModal && `show-modal`}`}
      onClick={() => setToggle(() => false)}
    >
      <article className={`modal`} onClick={(e) => addToPlaylistHandler(e)}>
        <div className={`create-new-playlist`}>
          <input
            type="text"
            className={`input-text`}
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
          />
          <button
            className={`button button-primary btn-create-playlist`}
            disabled={playlistStatus === "loading"}
            onClick={() => {
              if (isPlaylistPresent(playlistName)) {
                const protectedPlaylist = [
                  "liked videos",
                  "watch later",
                  "watch history",
                ].includes(playlistName.trim().toLowerCase());

                protectedPlaylist
                  ? toast.error("Protected playlist name", toastConfig)
                  : toast.error("Playlist already exists", toastConfig);
              } else {
                createPlaylist(playlistName);
              }

              setPlaylistName(() => "");
            }}
          >
            Create
          </button>
        </div>
        <div className="existing-playlists">
          <ul className={`list`}>
            {userPlaylists && userPlaylists.length === 0 && (
              <div className={`no-playlists-container`}>
                <p className={`no-playlists`}>No Playlists</p>
              </div>
            )}
            {userPlaylists &&
              userPlaylists.length > 0 &&
              userPlaylists.map((playlist) => {
                return (
                  <li key={playlist._id}>
                    <SelectPlaylist
                      playlistName={playlist.playlistName}
                      videoId={videoId}
                      isVideoPresent={isVideoPresent}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </article>
    </main>
  );
};
