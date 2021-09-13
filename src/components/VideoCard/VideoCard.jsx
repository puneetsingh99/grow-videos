import "./videocard-styles.css";
import { Avatar } from "..";
import { Link } from "react-router-dom";

export const VideoCard = ({ video }) => {
  const { thumbnail, title, videoId, channelAvatar } = video;
  return (
    <article title={title} className={`videocard`}>
      <Link className={`text-link`} to={`play/${videoId}`}>
        <img
          src={thumbnail}
          alt={`video-thumbnail`}
          className={`video-thumbnail responsive-img`}
        />
      </Link>

      <Link className={`text-link`} to={`play/${videoId}`}>
        <div className="video-info-container">
          <img src={channelAvatar} alt={"channel avatar"} />
          <p className={`video-title`} title={title}>
            {title}
          </p>
        </div>
      </Link>
    </article>
  );
};
