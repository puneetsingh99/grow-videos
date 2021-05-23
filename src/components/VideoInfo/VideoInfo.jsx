import "./video-info-styles.css";
import { Avatar } from "../Avatar/Avatar";
import { AddToPlaylistSvg } from "../../assets";
import { AddToPlaylist } from "../AddToPlaylist/AddToPlaylist";
import { useState } from "react";
import { Link } from "react-router-dom";

export const VideoInfo = ({ videoId, video }) => {
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
  const { title, channelAvatar, channelName, videoDesc } = video;

  return (
    <article className={`video-info`}>
      <div className={`title-container`}>
        <h1 className={`title`}>{title}</h1>
        <div
          className={`add-to-playlist`}
          onClick={() => setShowAddToPlaylistModal(() => true)}
        >
          <AddToPlaylistSvg />
          <p>Add to Playlist</p>
        </div>
      </div>
      <div>
        <div className={`channel-info`}>
          <Avatar src={channelAvatar} size={`l`} />
          <p className={`font-bold ml-4`}>{channelName}</p>
        </div>
        <p className={`desc`}>{videoDesc}</p>

        <AddToPlaylist
          toggleModal={showAddToPlaylistModal}
          setToggle={setShowAddToPlaylistModal}
          videoId={videoId}
        />
      </div>
    </article>
  );
};
