import "./nav-pill-styles.css";
import { NavPill } from "./NavPill";
import { usePlaylist, useUser } from "../../../contexts";

export const NavPillList = () => {
  const { user } = useUser();

  const allPlaylists = [...user.playlists];

  return (
    <ul className={`nav-pill-list`}>
      {allPlaylists.map((playlist) => (
        <li key={playlist.id}>
          <NavPill
            playlist={playlist.playlistName}
            onClickHandler={() => console.log("Onclick works!!")}
          />
        </li>
      ))}
    </ul>
  );
};
