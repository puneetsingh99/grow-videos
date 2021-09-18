import "./navbar-styles.css";
import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs";
import { IoTimeOutline, IoTimeSharp } from "react-icons/io5";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineLike,
  AiTwotoneLike,
} from "react-icons/ai";

import { useLocation, Link } from "react-router-dom";
import {
  ROUTE_HOME,
  ROUTE_LIBRARY,
  ROUTE_LIKED_VIDEOS,
  ROUTE_WATCH_LATER,
} from "../../../utils/appRoutes";

export const NavBarMobile = () => {
  const { pathname } = useLocation();

  return (
    <nav className={`navbar-mobile`}>
      <Link to={ROUTE_LIKED_VIDEOS} className={`text-link`}>
        {pathname === "/likedvideos" ? (
          <AiTwotoneLike size={22} />
        ) : (
          <AiOutlineLike size={22} />
        )}
      </Link>
      <Link to={ROUTE_HOME} className={`text-link`}>
        {pathname === "/" ? (
          <AiFillHome size={22} />
        ) : (
          <AiOutlineHome size={22} />
        )}
      </Link>
      <Link to={ROUTE_LIBRARY} className={`text-link`}>
        {pathname === "/library" ? (
          <BsCollectionPlayFill size={22} />
        ) : (
          <BsCollectionPlay size={22} />
        )}
      </Link>
      <Link to={ROUTE_WATCH_LATER} className={`text-link`}>
        {pathname === "/watchlater" ? (
          <IoTimeSharp size={23} />
        ) : (
          <IoTimeOutline size={23} />
        )}
      </Link>
    </nav>
  );
};
