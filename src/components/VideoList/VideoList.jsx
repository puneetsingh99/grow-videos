import { VideoCard } from "../VideoCard/VideoCard";
import "./video-list-styles.css";

export const VideoList = ({ filteredVideos }) => {
  const length = filteredVideos.length;
  return (
    <ul className={`video-list`}>
      {length > 0 ? (
        filteredVideos.map((video) => (
          <li key={video._id} className={`video`}>
            <VideoCard video={video} />
          </li>
        ))
      ) : (
        <div className={`empty-video-list`}>
          <h1> No videos </h1>
        </div>
      )}
    </ul>
  );
};
