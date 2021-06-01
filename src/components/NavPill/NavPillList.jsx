import "./nav-pill-styles.css";
import { NavPill } from "./NavPill";
import { usePlaylist, useUser } from "../../contexts";

export const NavPillList = () => {
  const { existingPlaylist } = usePlaylist();
  const { user } = useUser();

  const allPlaylists = [...existingPlaylist.playlists, ...user.playlists];

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
