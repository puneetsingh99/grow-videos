import { useState } from "react";
import { useVideos } from "../../../contexts";
import "./nav-pill-styles.css";

export const NavPill = ({ playlist, onClickHandler }) => {
  const { setCurrPlaylist, currPlaylist } = useVideos();
  return (
    <div
      className={`nav-pill ${currPlaylist === playlist && "selected-playlist"}`}
    >
      <p className={`nav-pill__name`} onClick={() => setCurrPlaylist(playlist)}>
        {playlist}
      </p>
    </div>
  );
};
