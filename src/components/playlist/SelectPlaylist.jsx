import { useState } from "react";
import { DeleteSvg } from "../../assets";
import { useUser, useVideos } from "../../contexts";
import "./add-to-playlist.css";

export const SelectPlaylist = ({ playlistName, videoId }) => {
  const {
    userDispatch,
    removePlaylist,
    addToPlaylist,
    removeFromPlaylist,
    getPlaylists,
  } = useUser();

  const [isChecked, setIsChecked] = useState(() => false);

  return (
    <article className={`playlist-selector`}>
      <div className="select-playlist">
        <input
          type="checkbox"
          name="select-playlist-radio"
          checked={isChecked}
          onChange={() => {
            isChecked
              ? removeFromPlaylist(playlistName, videoId)
              : addToPlaylist(playlistName, videoId);
            setIsChecked((currState) => !currState);
          }}
          id={playlistName}
          className={`checkbox`}
        />
        <p className={`playlist-name`}>{playlistName}</p>
      </div>

      <div
        className={`delete-playlist`}
        onClick={() => removePlaylist(playlistName)}
      >
        <DeleteSvg />
      </div>
    </article>
  );
};
