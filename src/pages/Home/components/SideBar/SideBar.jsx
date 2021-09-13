import "./sidebar-styles.css";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineHistory,
  AiOutlineLike,
  AiTwotoneLike,
} from "react-icons/ai";
import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs";
import { IoTimeOutline, IoTimeSharp } from "react-icons/io5";
import { useAuth, useVideos } from "../../../../contexts";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const { setCurrPlaylist, currPlaylist } = useVideos();
  const { isUserLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className={`sidebar`}>
      <ul className={`sidebar-menu-list`}>
        <li
          className={`sidebar-menu-item ${
            currPlaylist === "Home" && "highlighted"
          }`}
          onClick={() => {
            setCurrPlaylist("Home");
          }}
        >
          {currPlaylist === "Home" ? (
            <AiFillHome size={22} />
          ) : (
            <AiOutlineHome size={22} />
          )}
          <p>Home</p>
        </li>
        <button
          className={`${isUserLoggedIn ? "logout-button" : "login-button"}`}
          onClick={
            isUserLoggedIn
              ? logout
              : navigate("/login", { state: { from: "/" } })
          }
        >
          {isUserLoggedIn ? "Log out" : "Login"}
        </button>
      </ul>

      <p className={`sidebar-menu-separator`}></p>
      <ul className={`sidebar-menu-list`}>
        <li
          className={`sidebar-menu-item`}
          onClick={() => console.log("Link it to playlist route")}
        >
          <BsCollectionPlay size={22} />
          <p>Library</p>
        </li>
        <li
          className={`sidebar-menu-item ${
            currPlaylist === "History" && "highlighted"
          }`}
          onClick={() => {
            isUserLoggedIn
              ? setCurrPlaylist("History")
              : navigate("/login", { state: { from: "/" } });
          }}
        >
          <AiOutlineHistory size={22} /> <p> History </p>
        </li>
        <li
          className={`sidebar-menu-item ${
            currPlaylist === "Liked videos" && "highlighted"
          }`}
          onClick={() =>
            isUserLoggedIn
              ? setCurrPlaylist("Liked videos")
              : navigate("/login", { state: { from: "/" } })
          }
        >
          {currPlaylist === "Liked videos" ? (
            <AiTwotoneLike size={23} />
          ) : (
            <AiOutlineLike size={23} />
          )}
          <p>Liked videos</p>
        </li>
        <li
          className={`sidebar-menu-item ${
            currPlaylist === "Watch later" && "highlighted"
          }`}
          onClick={() => {
            isUserLoggedIn
              ? setCurrPlaylist("Watch later")
              : navigate("/login", { state: { from: "/" } });
          }}
        >
          {currPlaylist === "Watch later" ? (
            <IoTimeSharp size={23} />
          ) : (
            <IoTimeOutline size={23} />
          )}
          <p>Watch later</p>
        </li>
      </ul>

      <p className={`sidebar-menu-separator`}></p>
      <ul className={`sidebar-menu-list`}>
        <li
          className={`sidebar-menu-item existing_playlist  ${
            currPlaylist === "Investing" && "highlighted"
          }`}
          onClick={() => setCurrPlaylist("Investing")}
        >
          <p>Investing</p>
        </li>
        <li
          className={`sidebar-menu-item  existing_playlist ${
            currPlaylist === "Trading" && "highlighted"
          }`}
          onClick={() => setCurrPlaylist("Trading")}
        >
          <p> Trading </p>
        </li>
        <li
          className={`sidebar-menu-item existing_playlist ${
            currPlaylist === "Commodities" && "highlighted"
          }`}
          onClick={() => setCurrPlaylist("Commodities")}
        >
          <p>Commodities</p>
        </li>
        <li
          className={`sidebar-menu-item existing_playlist ${
            currPlaylist === "Futures and Options" && "highlighted"
          }`}
          onClick={() => setCurrPlaylist("Futures and Options")}
        >
          <p>F & O</p>
        </li>
      </ul>
    </div>
  );
};
