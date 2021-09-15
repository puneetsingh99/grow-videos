import "./video-info-styles.css";
import { Avatar } from "../avatar/Avatar";
import { AddToPlaylistSvg } from "../../assets";

import { AddToPlaylist } from "../playlist/AddToPlaylist";
import { useState } from "react";
import { MdPlaylistAdd } from "react-icons/md";
import { AiTwotoneLike, AiOutlineLike } from "react-icons/ai";
import { IoTimeOutline, IoTimeSharp } from "react-icons/io5";

export const VideoInfo = ({ video }) => {
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
  const { title, channelAvatar, channelName, videoId } = video;
  return (
    <article className={`video-info flex-bc`}>
      <div className={`title-container`}>
        <h1 className={`title`}>{title}</h1>
        <div className={`channel-info`}>
          <Avatar src={channelAvatar} size={`l`} />
          <p className={`font-bold ml-4`}>{channelName}</p>
        </div>
      </div>

      <div className={`action-buttons`}>
        <div
          title={`Add to a playlist`}
          className={`add-to-playlist`}
          onClick={() => setShowAddToPlaylistModal(() => true)}
        >
          <MdPlaylistAdd size={30} />
        </div>
        <div
          title={"Like video"}
          className={`add-to-playlist`}
          onClick={() => setShowAddToPlaylistModal(() => true)}
        >
          <AiOutlineLike size={30} />
        </div>

        <div
          title={"Watch later"}
          className={`add-to-playlist`}
          onClick={() => setShowAddToPlaylistModal(() => true)}
        >
          <IoTimeOutline size={30} />
        </div>
      </div>
      <AddToPlaylist
        toggleModal={showAddToPlaylistModal}
        setToggle={setShowAddToPlaylistModal}
        videoId={videoId}
      />
    </article>
  );
};
