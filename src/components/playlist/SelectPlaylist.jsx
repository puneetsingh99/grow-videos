import { useState } from "react";
import { DeleteSvg } from "../../assets";
import { useUser } from "../../contexts";
import { addRemoveVideoHandler } from "./addRemoveVideoHandler";
import "./add-to-playlist.css";

export const SelectPlaylist = ({ playlistName, videoId, isAlreadyPresent }) => {
  const { userDispatch } = useUser();
  const [isChecked, setIsChecked] = useState(() =>
    isAlreadyPresent ? true : false
  );

  return (
    <article className={`playlist-selector`}>
      <div
        className="select-playlist"
        onClick={() => {
          addRemoveVideoHandler(isChecked, userDispatch, playlistName, videoId);
          setIsChecked((currState) => !currState);
        }}
      >
        <input
          type="checkbox"
          name="select-playlist-radio"
          checked={isChecked}
          onChange={() => setIsChecked((currValue) => !currValue)}
          id={playlistName}
          className={`checkbox`}
        />
        <p className={`playlist-name`}>{playlistName}</p>
      </div>

      <div
        className={`delete-playlist`}
        onClick={() =>
          userDispatch({ type: "DELETE_PLAYLIST", payload: { playlistName } })
        }
      >
        <DeleteSvg />
      </div>
    </article>
  );
};
