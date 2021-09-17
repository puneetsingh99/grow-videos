import "./video-info-styles.css";
import { Avatar } from "../../../components/avatar/Avatar";
import { ActionButtons } from "../ActionButtons";
import { AddToPlaylist } from "../../../components/playlist/AddToPlaylist";
import { useAuth } from "../../../contexts";
import { useState } from "react";

import { ActionButtonsLoggedIn } from "../ActionButtonsLoggedIn";

export const VideoInfo = ({ video }) => {
  const { isUserLoggedIn } = useAuth();
  const [showAddToPlaylistModal, setShowAddToPlaylistModal] = useState(false);
  const { title, channelAvatar, channelName, videoId } = video;

  return (
    <section>
      <article className={`video-info flex-bc`}>
        <div className={`title-container`}>
          <h1 className={`title`}>{title}</h1>
          {isUserLoggedIn ? (
            <ActionButtonsLoggedIn
              setShowAddToPlaylistModal={setShowAddToPlaylistModal}
            />
          ) : (
            <ActionButtons
              setShowAddToPlaylistModal={setShowAddToPlaylistModal}
            />
          )}
          <div className={`channel-info`}>
            <Avatar src={channelAvatar} size={`l`} />
            <p className={`font-bold ml-4`}>{channelName}</p>
          </div>
        </div>
        <AddToPlaylist
          toggleModal={showAddToPlaylistModal}
          setToggle={setShowAddToPlaylistModal}
          videoId={videoId}
        />
      </article>
    </section>
  );
};
