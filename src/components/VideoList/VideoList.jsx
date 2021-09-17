import { VideoCard } from "../VideoCard/VideoCard";
import "./video-list-styles.css";
import { v4 as uuidv4 } from "uuid";

export const VideoList = ({ filteredVideos }) => {
  const length = filteredVideos.length;
  return (
    <ul className={`video-list`}>
      {length > 0 ? (
        filteredVideos.map((video) => (
          <li key={uuidv4()} className={`video`}>
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
