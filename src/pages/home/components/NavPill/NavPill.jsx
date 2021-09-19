import React from "react";
import { useVideos } from "../../../../contexts";
import "./nav-pill-styles.css";

export const NavPill = () => {
  const { currPlaylist, setCurrPlaylist } = useVideos();
  return (
    <ul className={`video-filter `}>
      <li
        className={`filter-pill ${
          currPlaylist === "Home" && "highlight-filter-pill"
        }`}
        onClick={() => setCurrPlaylist("Home")}
      >
        All
      </li>
      <li
        className={`filter-pill  ${
          currPlaylist === "Investing" && "highlight-filter-pill"
        }`}
        onClick={() => setCurrPlaylist("Investing")}
      >
        Investing
      </li>
      <li
        className={`filter-pill ${
          currPlaylist === "Trading" && "highlight-filter-pill"
        }`}
        onClick={() => setCurrPlaylist("Trading")}
      >
        Trading
      </li>
      <li
        className={`filter-pill ${
          currPlaylist === "Commodities" && "highlight-filter-pill"
        }`}
        onClick={() => setCurrPlaylist("Commodities")}
      >
        Commodities
      </li>
      <li
        className={`filter-pill ${
          currPlaylist === "Futures and Options" && "highlight-filter-pill"
        }`}
        onClick={() => setCurrPlaylist("Futures and Options")}
      >
        <p>F & O</p>
      </li>
    </ul>
  );
};
