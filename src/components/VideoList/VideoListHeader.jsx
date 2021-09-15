import { useVideos } from "../../contexts";
import "./video-list-styles.css";
import {
  AiOutlineHome,
  AiFillHome,
  AiOutlineHistory,
  AiOutlineLike,
  AiTwotoneLike,
} from "react-icons/ai";
import { BsCollectionPlay, BsCollectionPlayFill } from "react-icons/bs";
import { IoTimeOutline, IoTimeSharp } from "react-icons/io5";

const titleWithIcon = {
  Home: { icon: <AiFillHome size={25} />, title: "All Videos" },
  "Liked videos": { icon: <AiTwotoneLike size={25} />, title: "Liked Videos" },
  "Watch later": { icon: <IoTimeSharp size={25} />, title: "Watch later" },
  History: { icon: <AiOutlineHistory size={25} />, title: "History" },
  Investing: { icon: "", title: "Investing" },
  Trading: { icon: "", title: "Trading" },
  "Futures and Options": { icon: "", title: "Futures and Options" },
  Commodities: { icon: "", title: "Commodities" },
};

export const VideoListHeader = () => {
  const { currPlaylist } = useVideos();
  const { icon, title } = titleWithIcon[currPlaylist];
  return (
    <header className={`video-list-header__container`}>
      <p>
        <span>{icon}</span>
      </p>
      <h1 className={`video-list-header__title`}>{title}</h1>
    </header>
  );
};
