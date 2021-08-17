import "./add-to-playlist.css";
import { SelectPlaylist } from "./SelectPlaylist";
import { addToPlaylistHandler } from "./addToPlaylistHandler";
import { useUser } from "../../contexts";
import { useState } from "react";

export const AddToPlaylist = ({ toggleModal, setToggle, videoId }) => {
  const { user, userDispatch } = useUser();
  const [playlistName, setPlaylistName] = useState("");

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
            onClick={() => {
              userDispatch({
                type: "CREATE_PLAYLIST",
                payload: { playlistName },
              });
              setPlaylistName(() => "");
            }}
          >
            Create
          </button>
        </div>
        <div className="existing-playlists">
          <ul className={`list`}>
            {user.playlists.length > 0 ? (
              user.playlists.map((playlist) => {
                const isAlreadyPresent = playlist.videos.find(
                  (video) => video === videoId
                );

                return (
                  <li key={playlist._id}>
                    <SelectPlaylist
                      playlistName={playlist.playlistName}
                      videoId={videoId}
                      isAlreadyPresent={isAlreadyPresent}
                    />
                  </li>
                );
              })
            ) : (
              <div className={`no-playlists-container`}>
                <p className={`no-playlists`}>No existing Playlists</p>
              </div>
            )}
          </ul>
        </div>
      </article>
    </main>
  );
};
