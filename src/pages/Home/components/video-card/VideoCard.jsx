import "./videocard-styles.css";
import { Avatar } from "../../../../components";
import { Link } from "react-router-dom";

export const VideoCard = ({ video }) => {
  const { thumbnail, title, videoId } = video;
  return (
    <article title={title} className={`videocard`}>
      <Link className={`text-link`} to={`play/${videoId}`}>
        <img
          src={thumbnail}
          alt={`video-thumbnail`}
          className={`video-thumbnail responsive-img`}
        />

        <div className="truncate-overflow">
          <p className={`video-title`}>{title}</p>
        </div>
      </Link>
    </article>
  );
};
