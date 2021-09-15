import "./sidebar-styles.css";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineHistory,
  AiOutlineLike,
  AiTwotoneLike,
} from "react-icons/ai";
import {
  ROUTE_HOME,
  ROUTE_WATCH_LATER,
  ROUTE_HISTORY,
  ROUTE_LIBRARY,
  ROUTE_LIKED_VIDEOS,
  ROUTE_LOGIN,
} from "../../../../utils/appRoutes";
import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs";
import { IoTimeOutline, IoTimeSharp } from "react-icons/io5";
import { useAuth, useVideos } from "../../../../contexts";
import { Link, useNavigate, useLocation } from "react-router-dom";

export const SideBar = () => {
  const { setCurrPlaylist, currPlaylist, allVideos } = useVideos();
  const { status } = allVideos;
  const { isUserLoggedIn, logout } = useAuth();
  const { pathname } = useLocation();

  const navigate = useNavigate();

  return (
    <div className={`sidebar`}>
      <ul className={`sidebar-menu-list`}>
        <Link to={ROUTE_HOME} className={`text-link`}>
          <li
            className={`sidebar-menu-item ${
              pathname === ROUTE_HOME && "highlighted"
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
        </Link>
        <button
          className={`${isUserLoggedIn ? "logout-button" : "login-button"}`}
          onClick={
            isUserLoggedIn
              ? logout
              : () => navigate(ROUTE_LOGIN, { state: { from: pathname } })
          }
        >
          {isUserLoggedIn ? "Log out" : "Login"}
        </button>
      </ul>
      <p className={`sidebar-menu-separator`}></p>
      <ul className={`sidebar-menu-list`}>
        <Link to={ROUTE_LIBRARY} className={`text-link  `}>
          <li
            className={`sidebar-menu-item  ${
              pathname === ROUTE_LIBRARY && "highlighted"
            }`}
          >
            {pathname === "/library" ? (
              <BsCollectionPlayFill size={22} />
            ) : (
              <BsCollectionPlay size={22} />
            )}
            <p>Library</p>
          </li>
        </Link>
        <Link to={ROUTE_HISTORY} className={`text-link`}>
          <li
            className={`sidebar-menu-item ${
              pathname === ROUTE_HISTORY && "highlighted"
            }`}
          >
            <AiOutlineHistory size={22} /> <p> History </p>
          </li>
        </Link>
        <Link to={ROUTE_LIKED_VIDEOS} className={`text-link`}>
          <li
            className={`sidebar-menu-item ${
              pathname === ROUTE_LIKED_VIDEOS && "highlighted"
            }`}
          >
            {currPlaylist === "Liked videos" ? (
              <AiTwotoneLike size={23} />
            ) : (
              <AiOutlineLike size={23} />
            )}
            <p>Liked videos</p>
          </li>
        </Link>
        <Link to={ROUTE_WATCH_LATER} className={`text-link`}>
          <li
            className={`sidebar-menu-item ${
              pathname === ROUTE_WATCH_LATER && "highlighted"
            }`}
          >
            {currPlaylist === "Watch later" ? (
              <IoTimeSharp size={23} />
            ) : (
              <IoTimeOutline size={23} />
            )}
            <p>Watch later</p>
          </li>
        </Link>
      </ul>
      {pathname === ROUTE_HOME && (
        <>
          <p className={`sidebar-menu-separator`}></p>
          <ul className={`sidebar-menu-list`}>
            <li
              className={`sidebar-menu-item existing_playlist  ${
                currPlaylist === "Home" && "highlighted"
              }`}
              onClick={() => status === "succeeded" && setCurrPlaylist("Home")}
            >
              <p>All videos</p>
            </li>
            <li
              className={`sidebar-menu-item existing_playlist  ${
                currPlaylist === "Investing" && "highlighted"
              }`}
              onClick={() =>
                status === "succeeded" && setCurrPlaylist("Investing")
              }
            >
              <p>Investing</p>
            </li>
            <li
              className={`sidebar-menu-item  existing_playlist ${
                currPlaylist === "Trading" && "highlighted"
              }`}
              onClick={() =>
                status === "succeeded" && setCurrPlaylist("Trading")
              }
            >
              <p> Trading </p>
            </li>
            <li
              className={`sidebar-menu-item existing_playlist ${
                currPlaylist === "Commodities" && "highlighted"
              }`}
              onClick={() =>
                status === "succeeded" && setCurrPlaylist("Commodities")
              }
            >
              <p>Commodities</p>
            </li>
            <li
              className={`sidebar-menu-item existing_playlist ${
                currPlaylist === "Futures and Options" && "highlighted"
              }`}
              onClick={() =>
                status === "succeeded" && setCurrPlaylist("Futures and Options")
              }
            >
              <p>F & O</p>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};
