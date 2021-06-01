import "./videocard-styles.css";
import { Link } from "react-router-dom";

export const VideoCard = ({ video }) => {
    const { thumbnail, title, _id: videoId } = video;
    
  console.log(`play/${videoId}`);

  return (
    <article className={`videocard`}>
      <Link className={`text-link`} to={`play/${videoId}`}>
        <img
          src={thumbnail}
          alt={`video-thumbnail`}
          className={`video-thumbnail responsive-img`}
        />
        <p className={`video-title`}>{title}</p>
      </Link>
    </article>
  );
};
