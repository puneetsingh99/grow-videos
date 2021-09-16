import "./add-to-playlist.css";
import { SelectPlaylist } from "./SelectPlaylist";
import { addToPlaylistHandler } from "./addToPlaylistHandler";
import { useUser } from "../../contexts";
import { useState } from "react";
import { isSafePlaylist } from "../../contexts/user-context/utils";
import { useVideos } from "../../contexts";

export const AddToPlaylist = ({ toggleModal, setToggle, videoId }) => {
  const { user, userDispatch, createPlaylist, playlistStatus } = useUser();
  const [playlistName, setPlaylistName] = useState("");

  const userPlaylists = user.playlists.filter((playlist) =>
    isSafePlaylist(playlist.playlistName)
  );

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
              createPlaylist(playlistName);
              setPlaylistName(() => "");
            }}
          >
            Create
          </button>
        </div>
        <div className="existing-playlists">
          <ul className={`list`}>
            {userPlaylists.length === 0 && (
              <div className={`no-playlists-container`}>
                <p className={`no-playlists`}>No Playlists</p>
              </div>
            )}
            {userPlaylists.length > 0 &&
              userPlaylists.map((playlist) => {
                return (
                  <li key={playlist._id}>
                    <SelectPlaylist
                      playlistName={playlist.playlistName}
                      videoId={videoId}
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
